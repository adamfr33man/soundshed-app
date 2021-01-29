import { ipcRenderer } from 'electron';
import { Store } from "pullstate";
import { BluetoothDeviceInfo } from '../spork/src/interfaces/deviceController';
import { FxChangeMessage, Preset } from '../spork/src/interfaces/preset';
import { FxMappingSparkToTone } from './fxMapping';
import { Tone } from './soundshedApi';

const debounce = (func, delay) => {
    let timerId;
    return (...args) => {
        const boundFunc = func.bind(this, ...args);
        clearTimeout(timerId);
        timerId = setTimeout(boundFunc, delay);
    }
}


export const DeviceStore = new Store({
    isConnected: false,
    isConnectionInProgress: false,
    selectedChannel: -1,
    devices: [],
    connectedDevice: null,
    isDeviceScanInProgress: false,
    presetTone: null
});

export class DeviceViewModel {

    public statusMessage = "";

    // attached handler to be called by app model state changes and UI may have to react
    private onStateChangeHandler;

    private debouncedFXUpdate;

    private defaultStateChangeHandler() {
        this.log("UI Device state change handler called but not set.")
    }

    constructor() {
        this.onStateChangeHandler = this.defaultStateChangeHandler;
        this.setupElectronIPCListeners();

    }

    addStateChangeListener(onViewModelStateChange) {
        this.onStateChangeHandler = onViewModelStateChange;
    }

    removeStateChangeListener() {
        this.onStateChangeHandler = this.defaultStateChangeHandler;
    }

    setupElectronIPCListeners() {
        // setup event listeners for main electron app events (native bluetooth data state, device state responses, device list etc)
        ipcRenderer.on('device-state-changed', (event, args) => {
            this.log("got device state update from main.");

            if (args.presetConfig) {
                // got a preset, convert to Tone object model as required, 
                let t: Tone = args.presetConfig;
                if (args.presetConfig.meta) {
                    t = new FxMappingSparkToTone().mapFrom(args.presetConfig);
                }

                DeviceStore.update(s => { s.presetTone = t });
            }

            if (args.lastMessageReceived) {

                if (args.lastMessageReceived.presetNumber!=null) {

                    if (DeviceStore.getRawState().selectedChannel != args.lastMessageReceived.presetNumber) {

                        DeviceStore.update(s => { s.selectedChannel = args.lastMessageReceived.presetNumber });

                        // preset number has changed, refresh the details
                        this.requestPresetConfig();
                    }
                }
            }

            this.onStateChangeHandler();
        });

        ipcRenderer.on('device-connection-changed', (event, args) => {

            this.log("got connection event from main:" + args);

            if (args == "connected") {
                DeviceStore.update(s => { s.isConnected = true });
            }

            if (args == "failed") {
                DeviceStore.update(s => { s.isConnected = false });
            }

            this.onStateChangeHandler();
        });

        ipcRenderer.on('devices-discovered', (event, args) => {

            this.log("got refreshed list of devices:" + args);

            DeviceStore.update(s => { s.devices = args });

            if (args.length > 0) {
                localStorage.setItem("lastKnownDevices", JSON.stringify(args));
            }
            this.onStateChangeHandler();
        });
    }

    log(msg: string) {
        console.log(msg);
    }

    getLastKnownDevices() {
        let d = localStorage.getItem("lastKnownDevices");

        if (d) {
            return JSON.parse(d);
        } else {
            return [];
        }
    }

    async scanForDevices(): Promise<boolean> {

        DeviceStore.update(s => { s.isDeviceScanInProgress = true });

        await ipcRenderer.invoke('perform-action', { action: 'scan' });

        DeviceStore.update(s => { s.isDeviceScanInProgress = false });

        return true;
    }

    getLastConnectedDevice(): BluetoothDeviceInfo {
        let deviceJson = localStorage.getItem("lastConnectedDevice");
        if (deviceJson) {
            return <BluetoothDeviceInfo>JSON.parse(deviceJson);
        } else {
            return null;
        }
    }

    async connectDevice(device: BluetoothDeviceInfo): Promise<boolean> {
        if (device == null) return false;

        DeviceStore.update(s => { s.isConnectionInProgress = true });
        try {
            return await ipcRenderer.invoke('perform-action', { action: 'connect', data: device }).then(() => {

                // store last connected devices

                DeviceStore.update(s => { s.isConnected = true });

                DeviceStore.update(s => s.connectedDevice = device);

                localStorage.setItem("lastConnectedDevice", JSON.stringify(device));

                DeviceStore.update(s => { s.isConnectionInProgress = false });
                return true;
            });
        } catch (err) {
            DeviceStore.update(s => { s.isConnectionInProgress = false });
            return false;
        }

    }

    async requestPresetConfig(): Promise<boolean> {
        await ipcRenderer.invoke('perform-action', { action: 'getPreset', data: 0 }).then(
            () => {
                this.log("Completed preset query");
            });
        return true;
    }

    async requestPresetChange(args: Preset) {
        return ipcRenderer.invoke('perform-action', { action: 'applyPreset', data: args }).then(
            () => {

            });
        return true;
    }

    private normalizeDspId(dspId: string) {
        return dspId?.replace("pg.spark40.", "") ?? dspId;
    }

    async requestAmpChange(args: FxChangeMessage) {
        args.dspIdOld = this.normalizeDspId(args.dspIdOld);
        args.dspIdNew = this.normalizeDspId(args.dspIdNew);

        return ipcRenderer.invoke('perform-action', { action: 'changeAmp', data: args }).then(
            () => {

            });
        return true;
    }

    async requestFxChange(args: FxChangeMessage) {

        args.dspIdOld = this.normalizeDspId(args.dspIdOld);
        args.dspIdNew = this.normalizeDspId(args.dspIdNew);

        return ipcRenderer.invoke('perform-action', { action: 'changeFx', data: args }).then(
            () => {

            });
        return true;
    }

    private async requestFxParamChangeImmediate(args) {

        args.dspId = this.normalizeDspId(args.dspId);

        return ipcRenderer.invoke('perform-action', { action: 'setFxParam', data: args }).then(
            () => {

            });
        return true;
    }

    async requestFxParamChange(args): Promise<boolean> {

        if (this.debouncedFXUpdate == null) {
            this.debouncedFXUpdate = debounce((args) => this.requestFxParamChangeImmediate(args), 250);
        }

        this.debouncedFXUpdate(args);

        return true;
    }

    async requestFxToggle(args): Promise<boolean> {

        args.dspId = this.normalizeDspId(args.dspId);

        await ipcRenderer.invoke('perform-action', { action: 'setFxToggle', data: args }).then(
            () => {
                this.log("Sent fx toggle change");
            });
        return true;
    }

    async setChannel(channelNum: number): Promise<boolean> {
        await ipcRenderer.invoke('perform-action', { action: 'setChannel', data: channelNum }).then(
            () => {
                this.log("Completed setting channel");
               // DeviceStore.update(s => { s.selectedChannel == channelNum });
            });
        return true;
    }

    async getDeviceName(): Promise<boolean> {
        await ipcRenderer.invoke('perform-action', { action: 'getDeviceName', data: {} }).then(
            () => {

            });
        return true;
    }

    async getDeviceSerial(): Promise<boolean> {
        await ipcRenderer.invoke('perform-action', { action: 'getDeviceSerial', data: {} }).then(
            () => {

            });
        return true;
    }
}

export default DeviceViewModel;