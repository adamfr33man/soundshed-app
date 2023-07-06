import { SparkCommandMessage } from "../devices/spark/sparkCommandMessage";

const preset1 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "07079063-94A9-41B1-AB1D-02CBC5D00790",
    Name: "Silver Ship",
    Version: "0.7",
    Description: "1-Clean",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "Off", Parameters: [0.138313, 0.224643, 0.0] },
        { Name: "LA2AComp", OnOff: "On", Parameters: [0.0, 0.852394, 0.373072] },
        { Name: "Booster", OnOff: "Off", Parameters: [0.722592] },
        { Name: "RolandJC120", OnOff: "On", Parameters: [0.632231, 0.28182, 0.158359, 0.67132, 0.805785] },
        { Name: "Cloner", OnOff: "On", Parameters: [0.199593, 0.0] },
        { Name: "VintageDelay", OnOff: "Off", Parameters: [0.378739, 0.425745, 0.419816, 1.0] },
        { Name: "bias.reverb", OnOff: "On", Parameters: [0.285714, 0.408354, 0.289489, 0.388317, 0.582143, 0.65, 0.2] },
    ],
    "End Filler": 0xb4,
};
const preset2 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "CDE99591-C05D-4AE0-9E34-EC4A81F3F84F",
    Name: "Sweet Memory",
    Version: "0.7",
    Description: "1-Clean",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "Off", Parameters: [0.099251, 0.570997, 0.0] },
        { Name: "BlueComp", OnOff: "Off", Parameters: [0.430518, 0.663291, 0.355048, 0.557014] },
        { Name: "DistortionTS9", OnOff: "Off", Parameters: [0.058011, 0.741722, 0.595924] },
        { Name: "94MatchDCV2", OnOff: "On", Parameters: [0.528926, 0.500905, 0.246163, 0.417119, 0.782293] },
        { Name: "Flanger", OnOff: "Off", Parameters: [0.413793, 0.663043, 0.655172] },
        { Name: "DelayRe201", OnOff: "On", Parameters: [0.097778, 0.312182, 0.485182, 0.36964, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.561185, 0.506659, 0.417857, 0.300847, 0.602287, 0.594118, 0.0],
        },
    ],
    "End Filler": 0xeb,
};
const preset3 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "F577F7F3-E8E0-4D35-8975-0427C2054DCE",
    Name: "Dancing in the room",
    Version: "0.7",
    Description: "Description for Blues Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "Off", Parameters: [0.283019, 0.304245] },
        { Name: "Compressor", OnOff: "On", Parameters: [0.32546, 0.789062] },
        { Name: "Booster", OnOff: "Off", Parameters: [0.666735] },
        { Name: "Twin", OnOff: "On", Parameters: [0.613433, 0.371715, 0.453167, 0.67666, 0.805785] },
        { Name: "ChorusAnalog", OnOff: "On", Parameters: [0.185431, 0.086409, 0.485027, 0.567797] },
        { Name: "DelayEchoFilt", OnOff: "Off", Parameters: [0.533909, 0.275554, 0.455372, 0.457702, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.508871, 0.317935, 0.461957, 0.349689, 0.339286, 0.481753, 0.7],
        },
    ],
    "End Filler": 0x48,
};
const preset4 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "D8757D67-98EA-4888-86E5-5F1FD96A30C3",
    Name: "Royal Crown",
    Version: "0.7",
    Description: "1-Clean",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.21123, 0.570997, 0.0] },
        { Name: "Compressor", OnOff: "On", Parameters: [0.172004, 0.538197] },
        { Name: "DistortionTS9", OnOff: "Off", Parameters: [0.70311, 0.278146, 0.689846] },
        { Name: "ADClean", OnOff: "On", Parameters: [0.677083, 0.501099, 0.382828, 0.585946, 0.812231] },
        { Name: "ChorusAnalog", OnOff: "On", Parameters: [0.519976, 0.402152, 0.240642, 0.740579] },
        { Name: "DelayMono", OnOff: "On", Parameters: [0.173729, 0.233051, 0.493579, 0.6, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.688801, 0.392857, 0.461138, 0.693705, 0.488235, 0.466387, 0.3],
        },
    ],
    "End Filler": 0xa2,
};
const preset5 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "9D2F2AA3-4EC5-4BD7-A3CD-A76FD55698DB",
    Name: "Wooden Bridge",
    Version: "0.7",
    Description: "Description for Blues Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.316873, 0.304245] },
        { Name: "Compressor", OnOff: "Off", Parameters: [0.341085, 0.665754] },
        { Name: "Booster", OnOff: "On", Parameters: [0.661412] },
        { Name: "Bassman", OnOff: "On", Parameters: [0.768152, 0.491509, 0.476547, 0.284314, 0.389779] },
        { Name: "UniVibe", OnOff: "Off", Parameters: [0.5, 1.0, 0.7] },
        { Name: "VintageDelay", OnOff: "On", Parameters: [0.152219, 0.663314, 0.144982, 1.0] },
        { Name: "bias.reverb", OnOff: "On", Parameters: [0.120109, 0.15, 0.5, 0.406755, 0.299253, 0.768478, 0.1] },
    ],
    "End Filler": 0x12,
};
const preset6 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "B08F2421-0686-484E-B6EC-8F660A9344FC",
    Name: "Stone Breaker",
    Version: "0.7",
    Description: "Description for Blues Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.105936, 0.231329] },
        { Name: "Compressor", OnOff: "On", Parameters: [0.341085, 0.665754] },
        { Name: "DistortionTS9", OnOff: "Off", Parameters: [0.117948, 0.390437, 0.58356] },
        { Name: "TwoStoneSP50", OnOff: "On", Parameters: [0.634593, 0.507692, 0.664699, 0.519608, 0.71405] },
        { Name: "Tremolator", OnOff: "Off", Parameters: [0.33, 0.5, 1.0] },
        { Name: "DelayRe201", OnOff: "On", Parameters: [0.324783, 0.20482, 0.460643, 0.3042, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.554974, 0.842373, 0.783898, 0.385087, 0.659664, 0.294118, 0.0],
        },
    ],
    "End Filler": 0x59,
};
const preset7 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "55D60EB5-1735-4746-B0C4-16C53D8CA203",
    Name: "Country road",
    Version: "0.7",
    Description: "Description for Blues Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.283019, 0.304245] },
        { Name: "Compressor", OnOff: "Off", Parameters: [0.461066, 0.608902] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.200747, 0.216084, 0.58356] },
        { Name: "AC Boost", OnOff: "On", Parameters: [0.707792, 0.591124, 0.383605, 0.532821, 0.195119] },
        { Name: "Tremolo", OnOff: "Off", Parameters: [0.454134, 0.699934, 0.596154] },
        { Name: "DelayRe201", OnOff: "Off", Parameters: [0.33145, 0.348991, 0.672299, 0.453144, 1.0] },
        { Name: "bias.reverb", OnOff: "On", Parameters: [0.622826, 0.15, 0.5, 0.621429, 0.369905, 0.35, 0.1] },
    ],
    "End Filler": 0x57,
};
const preset8 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "2E2928B5-D87E-4346-B58F-145B88C581BE",
    Name: "Blues Ark",
    Version: "0.7",
    Description: "1-Clean",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.127897, 0.313185, 0.0] },
        { Name: "LA2AComp", OnOff: "On", Parameters: [0.0, 0.832474, 0.304124] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.570513, 0.549669, 0.706421] },
        { Name: "Twin", OnOff: "On", Parameters: [0.679549, 0.371715, 0.593663, 0.67666, 0.479191] },
        { Name: "ChorusAnalog", OnOff: "Off", Parameters: [0.377119, 0.310128, 0.51058, 0.455357] },
        { Name: "DelayMono", OnOff: "On", Parameters: [0.173729, 0.239186, 0.521186, 0.60678, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.325512, 0.392857, 0.461138, 0.10052, 0.488235, 0.466387, 0.3],
        },
    ],
    "End Filler": 0xa3,
};
const preset9 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "BB40E550-77D0-40B1-B0D3-D15D3D0C19EE",
    Name: "Modern Stone",
    Version: "0.7",
    Description: "Description for Rock Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.271226, 0.370283] },
        { Name: "BlueComp", OnOff: "On", Parameters: [0.38983, 0.665254, 0.305085, 0.644068] },
        { Name: "Overdrive", OnOff: "Off", Parameters: [0.586207, 0.500288, 0.530172] },
        { Name: "AmericanHighGain", OnOff: "On", Parameters: [0.616274, 0.43109, 0.419846, 0.495112, 0.850637] },
        { Name: "ChorusAnalog", OnOff: "Off", Parameters: [0.120593, 0.279661, 0.185763, 0.485297] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.271017, 0.190613, 0.355976, 0.555932, 0.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.175725, 0.680389, 0.761837, 0.177584, 0.302521, 0.408933, 0.3],
        },
    ],
    "End Filler": 0xe6,
};
const preset10 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "BFCFC107-6E80-4F26-8549-F44638856241",
    Name: "Crazy Crue",
    Version: "0.7",
    Description: "1-Clean",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.104459, 0.232455, 0.0] },
        { Name: "Compressor", OnOff: "Off", Parameters: [0.683015, 0.32726] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.355043, 0.31457, 0.554487] },
        { Name: "YJM100", OnOff: "On", Parameters: [0.562574, 0.485294, 0.317001, 0.250528, 0.576942] },
        { Name: "ChorusAnalog", OnOff: "Off", Parameters: [0.127396, 0.172299, 0.745763, 0.750884] },
        { Name: "DelayRe201", OnOff: "On", Parameters: [0.071111, 0.223224, 0.285796, 0.537533, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.147366, 0.506659, 0.417857, 0.268239, 0.602287, 0.594118, 0.0],
        },
    ],
    "End Filler": 0xcc,
};
const preset11 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "6AF9D829-CEA7-4189-AC80-B3364A563EB4",
    Name: "Dark Soul",
    Version: "0.7",
    Description: "1-Clean",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.116817, 0.128289, 0.0] },
        { Name: "BBEOpticalComp", OnOff: "Off", Parameters: [0.712698, 0.370691, 0.0] },
        { Name: "Overdrive", OnOff: "On", Parameters: [0.586207, 0.334725, 0.256692] },
        { Name: "SLO100", OnOff: "On", Parameters: [0.590909, 0.512066, 0.583825, 0.287179, 0.507674] },
        { Name: "Flanger", OnOff: "Off", Parameters: [0.413793, 0.663043, 0.655172] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.215111, 0.192443, 0.478663, 0.4, 1.0] },
        { Name: "bias.reverb", OnOff: "On", Parameters: [0.340062, 0.809783, 0.295483, 0.149187, 0.582143, 0.65, 0.2] },
    ],
    "End Filler": 0x58,
};
const preset12 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "7984DF4F-5885-4FE2-9786-F3F31E322E44",
    Name: "British Accent",
    Version: "0.7",
    Description: "Description for Pop Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.095322, 0.242286] },
        { Name: "Compressor", OnOff: "Off", Parameters: [0.499939, 0.337629] },
        { Name: "Booster", OnOff: "On", Parameters: [0.602726] },
        { Name: "OrangeAD30", OnOff: "On", Parameters: [0.620474, 0.312894, 0.484227, 0.527442, 0.492836] },
        { Name: "Cloner", OnOff: "Off", Parameters: [0.5, 0.0] },
        { Name: "DelayRe201", OnOff: "Off", Parameters: [0.224783, 0.324451, 0.153894, 0.488644, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.205106, 0.721662, 0.65679, 0.193705, 0.488235, 0.466387, 0.3],
        },
    ],
    "End Filler": 0xca,
};
const preset13 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "96E26248-0AA3-4D45-B767-8BB9337346C9",
    Name: "Iron Hammer",
    Version: "0.7",
    Description: "Description for Metal Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.217472, 0.0] },
        { Name: "Compressor", OnOff: "On", Parameters: [0.547004, 0.647572] },
        { Name: "DistortionTS9", OnOff: "Off", Parameters: [0.147861, 0.400662, 0.640123] },
        { Name: "SwitchAxeLead", OnOff: "On", Parameters: [0.572609, 0.352941, 0.374004, 0.460784, 0.705431] },
        { Name: "UniVibe", OnOff: "Off", Parameters: [0.5, 1.0, 0.7] },
        { Name: "DelayRe201", OnOff: "Off", Parameters: [0.207006, 0.281507, 0.411563, 0.461977, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "Off",
            Parameters: [0.103649, 0.720854, 0.531337, 0.189948, 0.631056, 0.380978, 0.2],
        },
    ],
    "End Filler": 0x49,
};
const preset14 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "82C5B8E8-7889-4302-AC19-74DF543872E1",
    Name: "Millenial Lead",
    Version: "0.7",
    Description: "Description for Metal Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.20966, 0.064809] },
        { Name: "BlueComp", OnOff: "Off", Parameters: [0.392063, 0.665254, 0.452324, 0.597193] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.046116, 0.357616, 0.769957] },
        { Name: "BE101", OnOff: "On", Parameters: [0.587958, 0.343137, 0.475797, 0.394193, 0.875443] },
        { Name: "ChorusAnalog", OnOff: "Off", Parameters: [0.761324, 0.132422, 0.491161, 0.567797] },
        { Name: "DelayMono", OnOff: "On", Parameters: [0.161777, 0.180514, 0.500135, 0.6, 1.0] },
        { Name: "bias.reverb", OnOff: "On", Parameters: [0.095109, 0.660326, 0.692935, 0.285326, 0.5, 0.5, 0.3] },
    ],
    "End Filler": 0x01,
};
const preset15 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "5F27120E-5119-4923-ADA9-42CCB5B01A95",
    Name: "Heavy Axe",
    Version: "0.7",
    Description: "Description for Metal Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.108097, 0.051788] },
        { Name: "BBEOpticalComp", OnOff: "Off", Parameters: [0.712698, 0.44154, 0.0] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.080701, 0.298013, 0.554487] },
        { Name: "EVH", OnOff: "On", Parameters: [0.599518, 0.467647, 0.407468, 0.357744, 0.820512] },
        { Name: "Phaser", OnOff: "Off", Parameters: [0.33125, 0.62] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.228444, 0.180514, 0.463325, 0.4, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "Off",
            Parameters: [0.285714, 0.709984, 0.582967, 0.388317, 0.582143, 0.65, 0.2],
        },
    ],
    "End Filler": 0xe4,
};
const preset16 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "961F7F40-77C3-4E98-A694-DF9CA4069955",
    Name: "Dual Train",
    Version: "0.7",
    Description: "Description for Rock Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.148831, 0.0] },
        { Name: "BBEOpticalComp", OnOff: "On", Parameters: [0.707544, 0.526591, 0.0] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.016884, 0.370637, 0.71923] },
        { Name: "Rectifier", OnOff: "On", Parameters: [0.70663, 0.42507, 0.450462, 0.498249, 0.79535] },
        { Name: "Cloner", OnOff: "Off", Parameters: [0.330986, 0.0] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.226572, 0.140636, 0.550847, 0.555932, 0.0] },
        {
            Name: "bias.reverb",
            OnOff: "Off",
            Parameters: [0.366912, 0.672237, 0.314634, 0.284543, 0.302521, 0.43339, 0.3],
        },
    ],
    "End Filler": 0xc6,
};
const preset17 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "94109418-E7D9-4B99-83F7-DDB11CA5847D",
    Name: "Spooky Melody",
    Version: "0.7",
    Description: "Description for Alternative Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.5, 1.0] },
        { Name: "Compressor", OnOff: "On", Parameters: [0.351691, 0.354167] },
        { Name: "DistortionTS9", OnOff: "Off", Parameters: [0.27217, 0.642384, 0.595924] },
        { Name: "Twin", OnOff: "On", Parameters: [0.613433, 0.489362, 0.453167, 0.505091, 0.58] },
        { Name: "UniVibe", OnOff: "On", Parameters: [0.636598, 0.0, 0.493814] },
        { Name: "DelayEchoFilt", OnOff: "On", Parameters: [0.231858, 0.555041, 0.529055, 0.308814, 0.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.963044, 0.232082, 0.176398, 0.224767, 0.228167, 0.357143, 0.5],
        },
    ],
    "End Filler": 0x19,
};
const preset18 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "E237C4CF-172B-4D68-AA5B-659F57715658",
    Name: "Fuzzy Jam",
    Version: "0.7",
    Description: "Description for Alternative Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.5, 1.0] },
        { Name: "Compressor", OnOff: "On", Parameters: [0.435025, 0.647572] },
        { Name: "Fuzz", OnOff: "On", Parameters: [0.436505, 1.0] },
        { Name: "ADClean", OnOff: "On", Parameters: [0.677083, 0.36447, 0.353902, 0.341186, 0.68] },
        { Name: "UniVibe", OnOff: "Off", Parameters: [0.5, 1.0, 0.7] },
        { Name: "VintageDelay", OnOff: "Off", Parameters: [0.293103, 0.646739, 0.284055, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.493323, 0.293282, 0.520823, 0.398143, 0.469538, 0.455462, 0.6],
        },
    ],
    "End Filler": 0x13,
};
const preset19 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "A3601E1D-8018-42A8-9A19-9B6F0DAB6F46",
    Name: "Angry Monkey",
    Version: "0.7",
    Description: "Description for Alternative Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.5, 1.0] },
        { Name: "BlueComp", OnOff: "On", Parameters: [0.38983, 0.665254, 0.305085, 0.644068] },
        { Name: "GuitarMuff", OnOff: "On", Parameters: [0.619421, 0.692053, 0.805691] },
        { Name: "94MatchDCV2", OnOff: "On", Parameters: [0.512397, 0.557982, 0.415584, 0.438462, 0.35124] },
        { Name: "Flanger", OnOff: "On", Parameters: [1.0, 0.33854, 0.245856] },
        { Name: "DelayMono", OnOff: "On", Parameters: [0.096667, 0.101227, 0.395705, 0.32, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.554341, 0.308929, 0.237733, 0.738432, 0.26514, 0.276786, 0.4],
        },
    ],
    "End Filler": 0xe3,
};
const preset20 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "50A3B945-1A86-4E06-B10B-550E3226DDF2",
    Name: "Hide and Seek",
    Version: "0.7",
    Description: "Description for Alternative Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.5, 1.0] },
        { Name: "BlueComp", OnOff: "Off", Parameters: [0.590723, 0.665254, 0.305085, 0.644068] },
        { Name: "Booster", OnOff: "On", Parameters: [0.668454] },
        { Name: "Bogner", OnOff: "On", Parameters: [0.655844, 0.626593, 0.640734, 0.351588, 0.338571] },
        { Name: "MiniVibe", OnOff: "Off", Parameters: [0.047057, 0.117188] },
        { Name: "DelayMultiHead", OnOff: "On", Parameters: [0.706667, 0.644172, 0.564417, 0.65, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.448518, 0.405932, 0.566185, 0.648674, 0.302521, 0.180672, 0.3],
        },
    ],
    "End Filler": 0x45,
};
const preset21 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "3013444B-9929-499F-964D-707E9D8F5FA0",
    Name: "Bass Driver",
    Version: "0.7",
    Description: "Description for Bass Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.419271, 0.226562] },
        { Name: "BassComp", OnOff: "On", Parameters: [0.372727, 0.530303] },
        { Name: "SABdriver", OnOff: "On", Parameters: [0.535256, 1.0, 0.724359, 1.0] },
        { Name: "W600", OnOff: "On", Parameters: [0.664699, 0.423077, 0.276884, 0.415083, 0.448052] },
        { Name: "UniVibe", OnOff: "Off", Parameters: [0.5, 1.0, 0.7] },
        { Name: "VintageDelay", OnOff: "Off", Parameters: [0.359402, 0.400883, 0.35028, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.253261, 0.4625, 0.234401, 0.137733, 0.293818, 0.638043, 0.1],
        },
    ],
    "End Filler": 0x91,
};
const preset22 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "D99DC07A-C997-4ABD-833A-0C13EA8BEE5A",
    Name: "Comped Cleaner",
    Version: "0.7",
    Description: "Description for Bass Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.205729, 0.226562] },
        { Name: "BassComp", OnOff: "On", Parameters: [0.19304, 0.334991] },
        { Name: "MaestroBassmaster", OnOff: "Off", Parameters: [0.698052, 0.276184, 0.566086] },
        { Name: "GK800", OnOff: "On", Parameters: [0.688351, 0.407152, 0.399197, 0.746875, 0.774234] },
        { Name: "Cloner", OnOff: "Off", Parameters: [0.248888, 0.0] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.163333, 0.214724, 0.355828, 0.32, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.168478, 0.744565, 0.130435, 0.288043, 0.32337, 0.293478, 0.6],
        },
    ],
    "End Filler": 0x54,
};
const preset23 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "57AF2690-F7C8-4766-9A92-F3A51629B959",
    Name: "Cozy Serenade",
    Version: "0.7",
    Description: "Description for Acoustic Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.143229, 0.0] },
        { Name: "BlueComp", OnOff: "On", Parameters: [0.506411, 0.356543, 0.348913, 0.407461] },
        { Name: "Booster", OnOff: "Off", Parameters: [0.567515] },
        { Name: "FatAcousticV2", OnOff: "On", Parameters: [0.453955, 0.29276, 0.565172, 0.575339, 0.829431] },
        { Name: "ChorusAnalog", OnOff: "Off", Parameters: [0.761324, 0.236716, 0.745763, 0.431636] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.187778, 0.211656, 0.334356, 0.4, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.315883, 0.652174, 0.111413, 0.357842, 0.339286, 0.489905, 0.7],
        },
    ],
    "End Filler": 0x2f,
};
const preset24 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "DEFBB271-B3EE-4C7E-A623-2E5CA53B6DDA",
    Name: "Studio Session",
    Version: "0.7",
    Description: "Description for Acoustic Preset 1",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "Off", Parameters: [0.5, 0.346698] },
        { Name: "BBEOpticalComp", OnOff: "On", Parameters: [0.758266, 0.25855, 0.0] },
        { Name: "DistortionTS9", OnOff: "Off", Parameters: [0.139574, 0.407285, 0.689846] },
        { Name: "Acoustic", OnOff: "On", Parameters: [0.639823, 0.385056, 0.383449, 0.599397, 0.51948] },
        { Name: "ChorusAnalog", OnOff: "On", Parameters: [0.841681, 0.227514, 0.935947, 0.351279] },
        { Name: "DelayMono", OnOff: "Off", Parameters: [0.223999, 0.211189, 0.490933, 0.6, 1.0] },
        {
            Name: "bias.reverb",
            OnOff: "On",
            Parameters: [0.722819, 0.326169, 0.275776, 0.360714, 0.343944, 0.486025, 0.4],
        },
    ],
    "End Filler": 0x23,
};

const preset25 = {
    "Preset Number": [0x00, 0x7f],
    UUID: "2bdfa3ab-4a65-4113-ab62-4e34c169805b",
    Name: "Paul AC",
    Version: "0.7",
    Description: "",
    Icon: "icon.png",
    BPM: 120.0,
    Pedals: [
        { Name: "bias.noisegate", OnOff: "On", Parameters: [0.283019, 0.304245] },
        { Name: "Compressor", OnOff: "Off", Parameters: [0.461066, 0.608902] },
        { Name: "DistortionTS9", OnOff: "On", Parameters: [0.3355, 0.216084, 0.4074] },
        { Name: "AC Boost", OnOff: "On", Parameters: [0.4724, 0.7663, 0.2575, 0.2062, 0.4555] },
        { Name: "Tremolo", OnOff: "Off", Parameters: [0.454134, 0.699934, 0.596154] },
        { Name: "DelayRe201", OnOff: "Off", Parameters: [0.33145, 0.348991, 0.672299, 0.453144, 1.0] },
        { Name: "bias.reverb", OnOff: "On", Parameters: [0.622826, 0.15, 0.5, 0.621429, 0.369905, 0.35, 0.1] },
    ],
    "End Filler": 0x83,
};

const preset_1h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003037303739303600332d393441392d00343142312d41420031442d30324342004335443030373902302b53696c7665407220536869702308302e3727312d43106c65616e286963406f6e2e706e674a3242700000172e62006961732e6e6f6940736567617465424d1300114a3e0d210d6c01114a3e66080d5102114a0000000200284c41324143186f6d704313f7",
    "01fe000053fead000000000000000000f0013a1501013403010000114a003000000001114a3f305a367e02114a3e093f034b27426f6f307374657242110073114a3f387b4a2b00526f6c616e644a304331323043150033114a3f215964012b114a3e104a360223114a3e22285d0333114a3f2b5b210463114a3f4e476d2640436c6f6e6572430d1200114a3e4c620c1b01114a00000002002c56696e746100676544656c61791b421400114af7",
    "01fe000053fe81000000000000000000f0013a150101300302593e416a143601114a3e597b403602114a3e56721f1603114a3f000000012b626961732e7260657665726243171600114a3e12491b5601114a3e5113475602114a3e1437673603114a3e46517c0604114a3f1507530605114a3f2666666606114a3e4c4c4d0134f7",
];
const preset_2h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924004344453939353900312d433035442d00344145302d39450033342d45433441003831463346383402462c537765657400204d656d6f72791123302e3727312d20436c65616e286900636f6e2e706e67654a42700000172e00626961732e6e6f00697365676174655b421300114a3d4b18441c01114a3f121a2c5c02114a000004000028426c756510436f6d7042f7",
    "01fe000053fead000000000000000000f0013a1501016c0401001400114a6a3e5c6c5b01114a643f294d7002114a6e3e35485a03114a143f0e18782d44690073746f7274696f306e54533942130033114a3d6d1c710113114a3f3d617e0253114a3f180e7a2b0039344d61746368304443563243150023114a3f0767320103114a3f003b4f0203114a3e7c1227033b114a3e55101f0443114a3f48445b2700466c616e6765721b421300114af7",
    "01fe000053fead000000000000000000f0013a150101740402003e535c2d2601114a3f293d302602114a3f27395a012a44656c61795230653230314315002b114a3d483f55011b114a3e1f5652022b114a3e786946030b114a3e3d4174044b114a3f0000002b00626961732e7265307665726243170033114a3f0f29520113114a3f013467021b114a3e55715a032b114a3e1a081e0403114a3f1a2f7b0503114a3f18181e0603114a000000f7",
    "01fe000053fe1d000000000000000000f0013a15010110040302006bf7",
];
const preset_3h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924004635373746374600332d453845302d00344433352d38390037352d30343237004332303534444302453344616e6369006e6720696e207400686520726f6f6d1123302e373e44650073637269707469006f6e20666f722000426c75657320500072657365742031012869636f6e2e70146e674a4270000003172e626961732e006e6f69736567610c7465421200f7",
    "01fe000053fead000000000000000000f0013a1501015c040100114a3e105b675e01114a3e1b0546002a436f6d7040726573736f72436d1200114a3e26224d3101114a3f497f037827426f6f73746c6572421100114a143f2a2f252454776c696e431500114a683f1d097201114a623e3e516e02114a6a3e68050103114a683f2d391704114a183f4e476d2c4368006f727573416e61586c6f6743140011594a3e3d612001110d4a3d307734f7",
    "01fe000053fead000000000000000000f0013a1501013404020002114a3e3178557503114a3f08115b252d44656c0061794563686f4658696c7442150011494a3f082e430111454a3e0d156a0211554a3e6926050311554a3e6a576b0411254a3f0000002b62006961732e7265765865726243170011414a3f02455f01114d4a3e22486002115d4a3e6c05210311454a3e330a7004115d4a3e2d366505114d4a3e7628540611014a3f333333f7",
    "01fe000053fe1c000000000000000000f0013a1501010004030148f7",
];
const preset_4h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924004438373537443600372d393845412d00343838382d38360045352d35463146004439364133304302332b526f79616c402043726f776e2308302e3727312d43106c65616e286963406f6e2e706e674a3242700000172e62006961732e6e6f6940736567617465430d1300114a3e584c0d2d01114a3f122c0d5c02114a00000002002a436f6d7072006573736f72f7",
    "01fe000053fead000000000000000000f0013a1501015c03010043120011514a3e3021510111294a3f0947472d44006973746f727469606f6e54533942132600114a3f337f041601114a3e0e69276602114a3f30193f01274144436c6561366e431500114a3f302d555001114a3f3000480602114a3e3144020803114a3f3416000f04114a3f0a4f6e5f2c43686f00727573416e616c6c6f67431400114a603f051d2601114a0e3e4d665e02f7",
    "01fe000053fea9000000000000000000f0013a1501011803027c114a3e761a6a5b03114a3f3d0716162944656c6160794d6f6e6f43152600114a3e3166046601114a3e6e246c3602114a3e7c36636603114a3f19191a1604114a3f000000012b626961732e7260657665726243170600114a3f3055435601114a3e49240d1602114a3e6c1a486603114a3f3116277604114a3e7979703605114a3e6e4a477606114a3e19191a0122f7",
];
const preset_5h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003944324632414100332d344543352d00344244372d41330043442d41373646004435353639384402422d576f6f6465006e204272696467226523302e373e44006573637269707400696f6e20666f720020426c75657320005072657365742002312869636f6e2e28706e674a4270000600172e62696173002e6e6f697365675861746543120011054a3e223d2ef7",
    "01fe000053fead000000000000000000f0013a1501013403010001114a3e0b1b46002a436f6d0070726573736f725b421200114a3e2e1b223101114a3f2a066e5b27426f6f735874657243110011214a3f29524c2742406173736d616e434d1500114a3f44256d1c01114a3e7b276c1102114a3e737d6d7803114a3e11116d1b04114a3e4711021d27556e6956696c6265421300114a603f00000001114a623f00000002114a103f3333332cf7",
    "01fe000053fe94000000000000000000f0013a1501010003026a56696e740061676544656c613679431400114a3e321b5f4c01114a3f36294e7202114a3e3014762903114a3f090000002b62696100732e72657665723662431700114a3d37757b3501114a3e3619191a02114a3f3000000003114a3e3150423104114a3e3519373005114a3f36443a7906114a3d074c4c4d12f7",
];
const preset_6h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924004230384632343200312d303638362d00343834452d42360045432d38463636003041393334344602432d53746f6e650020427265616b65227223302e373e44006573637269707400696f6e20666f720020426c75657320005072657365742002312869636f6e2e28706e674a4270000600172e62696173002e6e6f6973656758617465431200111d4a3d587479f7",
    "01fe000053fead000000000000000000f0013a1501013404010001114a3e0e6c61022a436f6d0070726573736f725b431200114a3e2e1b223101114a3f2a066e5b2d44697374006f7274696f6e546c5339421300114a6e3d710e3901114a663e47675c02114a103f1564302c5477006f53746f6e65535850353043150011514a3f2274300111494a3f01781a0211514a3f2a29370311414a3f0505080411394a3f364b7b2a540072656d6f6cf7",
    "01fe000053fead000000000000000000f0013a1501010404020061746f725b421300114a3e281b754301114a3f0058000002114a3f000400002a44656c6140795265323031432d1500114a3e26494d7501114a3e513c6c5602114a3e6b596c6603114a3e1b402c1a04114a3f000002002b626961732e40726576657262430d1700114a3f0e124d4701114a3f57254d4202114a3f482d2d0a03114a3e452a4c2004114a3f285f0d3d05114a3ef7",
    "01fe000053fe27000000000000000000f0013a1501013804030b1616220603114a0000000059f7",
];
const preset_7h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924003535443630454200352d313733352d00343734362d42300043342d31364335003344384341323002332c436f756e7400727920726f61641123302e373e44650073637269707469006f6e20666f722000426c75657320500072657365742031012869636f6e2e70146e674a4270000003172e626961732e006e6f69736567616c7465431200114a0e3e10675e01f7",
    "01fe000053fead000000000000000000f0013a1501015c040100114a3e1b0546002a436f6d7040726573736f72422d1200114a3e6c104d5801114a3f1b6102002d446973746f007274696f6e54533639431300114a3e364d101f01114a3e305d452002114a3f081564302841432060426f6f737443154600114a3f35315b4601114a3f1753675602114a3e4467604603114a3f0866752604114a3e474d4601275472656d6f6c166f42130011f7",
    "01fe000053fead000000000000000000f0013a1501016c0402004a3e68040c4001114a3f332e4d6002114a3f181d030c2a44656c617960526532303142157600114a3e2933507601114a3e322e734602114a3f2c1b4a1603114a3e68027e1604114a3f000000012b626961732e7260657665726243174600114a3f1f71066601114a3e19191a0602114a3f0000004603114a3f1f15791604114a3e3d64301605114a3e3333331606114a3d4cf7",
    "01fe000053fe1e000000000000000000f0013a150101180403034c4d57f7",
];
const preset_8h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003245323932384200352d443837452d00343334362d42350038462d313435420038384335383142024529426c756573102041726b23302e023727312d436c6504616e2869636f6e502e706e674a42700c0000172e62696100732e6e6f697365306761746543130013114a3e02776e012b114a3e2059490243114a0000000028004c413241436f6d167043130011f7",
    "01fe000053fead000000000000000000f0013a1501010c0301004a0000000c0001114a3f551d6c0402114a3e1b3602242d446973746f007274696f6e54533639431300114a3f30120d2401114a3f320c371c02114a3f0a34580224547769366e431500114a3f362d766c01114a3e313e516e02114a3f32177a4c03114a3f342d391704114a3e0d7558062c43686f00727573416e616c6c6f67421400114a6a3e41153e01114a063e1e491902f7",
    "01fe000053fea9000000000000000000f0013a1501011803027c114a3f0259355f03114a3e6906240d2944656c6160794d6f6e6f43152600114a3e3166042601114a3e746d2d0602114a3f056c724603114a3f1b556f1604114a3f000000012b626961732e7260657665726243177600114a3e2629025601114a3e49240d1602114a3e6c1a483603114a3d4d5d6e7604114a3e7979703605114a3e6e4a477606114a3e19191a0123f7",
];
const preset_9h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924004242343045353500302d373744302d00343042312d42300044332d44313544003344304331394502452c4d6f646572006e2053746f6e651123302e373d44650073637269707469006f6e20666f722000526f636b20507240657365742031280069636f6e2e706e4a674a4270000017012e626961732e6e006f6973656761743665431200114a3e130a5e220111f7",
    "01fe000053fead000000000000000000f0013a1501016c0401004a3e3d15033c28426c756543586f6d70431400115d4a3e47174c0111414a3f2a4e160211454a3e1c341a0311394a3f246124294f00766572647269763665421300114a3f3416112901114a3f3400126002114a3f0a07395a30416d6500726963616e48694067684761696e434d1500114a3f1d446c2201114a3e5c376d5402114a3e56762c0e03114a3e7d7f0c5204114a3ff7",
    "01fe000053fead000000000000000000f0013a150101540402005943592c0043686f72757341606e616c6f6742143600114a3d7679765601114a3e0f2f3a4602114a3e3e38285603114a3e787859012944656c61794d586f6e6f421500115d4a3e0a423d0111414a3e43300e0211454a3e36427c0311514a3f0e510f0411214a000000002b62006961732e7265765865726243170011494a3e3371410111514a3f2e2d790211114a3f430740f7",
    "01fe000053fe3c000000000000000000f0013a1501013004031d03114a3e3635581504114a3e331a640805114a3e35515f2b06114a3e0f19191a66f7",
];
const preset_10h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924004246434643313000372d364538302d00344632362d38350034392d46343436003338383536323402312a4372617a792020437275652330042e3727312d436c0865616e2869636f206e2e706e674a4219700000172e62690061732e6e6f697360656761746543137600114a3d556e1a4601114a3e6e082f0602114a00000000012a436f6d7072651073736f7242f7",
    "01fe000053fead000000000000000000f0013a1501016c0301001200114a643f2e5a1201114a1e3e270e1f2d44690073746f7274696f306e5453394313001b114a3e354832010b114a3e210f520273114a3f0d725c2640594a4d313030430d1500114a3f10042d5a01114a3e78782c7502114a3e224d2d7403114a3e00454c3504114a3f133202792c43686f72750073416e616c6f671b421400114a3e0218741901114a3e30186f2602114af7",
    "01fe000053fea7000000000000000000f0013a1501012003027b3f3e6a534603114a3f40396f012a44656c61795230653230314315003b114a3d1122250133114a3e641455022b114a3e12535a0333114a3f091b43044b114a3f0000002b00626961732e7265307665726243170013114a3e16671d0113114a3f013467021b114a3e55715a032b114a3e09561f0403114a3f1a2f7b0503114a3f18181e0643114a000000004cf7",
];
const preset_11h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003641463944383200392d434541372d00343138392d41430038302d4233333600344135363345420234294461726b2010536f756c23302e023727312d436c6504616e2869636f6e502e706e674a42700c0000172e62696100732e6e6f69736530676174654313002b114a3d6f3d400103114a3e035e310243114a000000002e004242454f7074690063616c436ff7",
    "01fe000053fead000000000000000000f0013a150101640301006d7042130600114a3f3673603601114a3e3d4b360602114a0000000001294f76657264725869766543130011514a3f1611290111454a3e2b61130211254a3e036d222653604c4f31303043154600114a3f1745504601114a3f0316424602114a3f15750e1603114a3e1309206604114a3f01766c0127466c616e67653672421300114a3e37535c2d01114a3f12293d300211f7",
    "01fe000053fe9f000000000000000000f0013a150101480302744a3f2739025a2944656c6179304d6f6e6f42150003114a3e5c460f0123114a3e450f47020b114a3e751351033b114a3e4c4c4d044b114a3f0000002b00626961732e726530766572624317002b114a3e2e1c1b0123114a3f4f4d70022b114a3e17490c0313114a3e18447a0403114a3f1507530503114a3f2666660633114a3e4c4c4d58f7",
];
const preset_12h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003739383444463400462d353838352d00344645322d39370038362d46334633003145333232453402342e42726974690073682041636365446e7423302e373c00446573637269700074696f6e20666f007220506f7020500072657365742031012869636f6e2e70146e674a4270000003172e626961732e006e6f69736567616c7465431200114a023d43382e01f7",
    "01fe000053fead000000000000000000f0013a1501011c030100114a3e780619522a436f6d7040726573736f72426d1200114a3e7f786c0101114a3e2c5d033527426f6f73746c6572431100114a103f1a4c402a4f7200616e67654144333630431500114a3f321e576201114a3e3520332402114a3e37776c1a03114a3f3007067004114a3e097c550026436c6f586e657242120011414a3f0000000111214a000000002a4400656c617952f7",
    "01fe000053fe93000000000000000000f0013a15010100030269653230311b421500114a3e665a2d0401114a3e26181e7102114a3e1d59166403114a3e7a5a2f0c04114a3f000400002b62696173002e7265766572621b431700114a3e5218074f01114a3f381b3e5702114a3f2818236403114a3e465a5a1b04114a3e795b797005114a3e6e594a4706114a3e1907191a4af7",
];
const preset_13h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924003936453236323400382d304141332d00344434352d42370036372d38424239003333373334364302392b49726f6e204048616d6d65722308302e373e446573006372697074696f006e20666f72204d006574616c20507240657365742031280069636f6e2e706e4a674a4270000017012e626961732e6e006f6973656761743665431200114a3e165e307b0111f7",
    "01fe000053fead000000000000000000f0013a1501010c0401004a00000002002a436f6d7072606573736f7243120600114a3f0c08742601114a3f254747012d446973746f720074696f6e5453391b421300114a3e175a686001114a3e4d1a231202114a3f23055f1a2d537769740063684178654c656c6164431500114a6c3f12160101114a6e3e34342f02114a623e3f7d7403114a6e3e6b6b6104114a143f34172027556e006956696265f7",
    "01fe000053fead000000000000000000f0013a1501015c04020042130011414a3f0000000111454a3f0000000211214a3f3333332a4400656c61795265326c3031421500114a643e53796201114a6a3e10212f02114a663e52386303114a663e6c084004114a123f0000002b62690061732e726576656c7262421700114a6a3d54456d01114a6c3f38096302114a683f08053403114a6c3e42013a04114a6c3f210c6305114a0a3e430f0c06f7",
    "01fe000053fe23000000000000000000f0013a15010118040307114a3e4c034c4d49f7",
];
const preset_14h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924003832433542384500382d373838392d00343330322d41430031392d37344446003534333837324502312e4d696c6c65006e69616c204c6544616423302e373e00446573637269700074696f6e20666f0072204d6574616c00205072657365740420312869636f6e502e706e674a42700c0000172e62696100732e6e6f697365306761746543120013114a3e5631f7",
    "01fe000053fead000000000000000000f0013a150101640401001c01114a1e3d043a1528426c407565436f6d70426d1400114a3e483c0c7b01114a3f2a4e6c1602114a3e67174c0303114a3f186103242d446973746f007274696f6e54533639431300114a3d323c642101114a3e3137197202114a3f0c451b67254245316c3031431500114a643f16046a01114a6e3e2f2f2702114a6e3e731b2a03114a6e3e49532a04114a103f601d082cf7",
    "01fe000053fead000000000000000000f0013a1501010404020043686f72007573416e616c6f3667421400114a3f3242662101114a3e3607192202114a3e317b797403114a3f08115b252944656c4061794d6f6e6f434d1500114a3e25284d5f01114a3e38580d2902114a3f00084d5903114a3f19192d1a04114a3f000002002b626961732e40726576657262436d1700114a3d42480d0201114a3f290b0c2002114a3f31640c3003114a3ef7",
    "01fe000053fe37000000000000000000f0013a150101080403191216400403114a3f0000000503114a3f000000063b114a3e19191a01f7",
];
const preset_15h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003546323731323000452d353131392d00343932332d41440041392d3432434300423542303141390235294865617679102041786523302e02373e446573637200697074696f6e2000666f72204d657400616c20507265731065742031286963406f6e2e706e674a3242700000172e62006961732e6e6f6940736567617465432d1200114a3d5d610d7601114a3df7",
    "01fe000053fead000000000000000000f0013a15010164030100541f272e004242454f7074690063616c436f6d701b421300114a3f3658736001114a3e621a110802114a00000400002d44697374006f7274696f6e546c5339431300114a6a3d25461101114a663e18152902114a1c3f0d725c2345563648431500114a3f30197a0301114a3e316f6f6d02114a3e37501f2503114a3e31372a3904114a3f08520d1326506861187365724212f7",
    "01fe000053feaa000000000000000000f0013a1501013003027d00114a3e3729191a01114a3f0a1e38522944656c4061794d6f6e6f424d1500114a3e696d4c3901114a3e38582d2902114a3e6d386d6f03114a3e4c4c2d4d04114a3f000002002b626961732e40726576657262422d1700114a3e12494c1b01114a3f35410d0302114a3f153d6c5303114a3e46510c7c04114a3f15070c5305114a3f26664c6606114a3e4c4c034d64f7",
];
const preset_16h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924003936314637463400302d373743332d00344539382d41360039342d44463943004134303639393502352a4475616c2020547261696e2330042e373d446573630072697074696f6e0020666f7220526f00636b20507265731065742031286963406f6e2e706e674a3242700000172e62006961732e6e6f6940736567617465430d1200114a3e18670c2701114a00f7",
    "01fe000053fead000000000000000000f0013a150101440401000000002e004242454f7074690063616c436f6d701b431300114a3f351a211b01114a3f061b4e2b02114a00000400002d44697374006f7274696f6e546c5339431300114a623c0a505001114a663e3d442202114a103f381f7529526500637469666965721b431500114a3f345b653401114a3e595b224602114a3e665b227503114a3e7f181a7e04114a3f4b051c0f26436cf7",
    "01fe000053fead000000000000000000f0013a150101040402006f6e65725b421200114a3e291a767f01114a00000400002944656c6160794d6f6e6f42150600114a3e68027e4601114a3e1002620602114a3f0d044f4603114a3f0e510f0604114a00000000012b626961732e7260657665726242177600114a3e3b5b644601114a3f2c17395602114a3e2117357603114a3e112f1f3604114a3e1a64083605114a3e5d654b1606114a3e19f7",
    "01fe000053fe1e000000000000000000f0013a15010138040303191a46f7",
];
const preset_17h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924003934313039343100382d453744392d00344239392d38330046372d44444231003143413538343702442d53706f6f6b0079204d656c6f64227923302e37592400446573637269700074696f6e20666f007220416c746572006e617469766520005072657365742002312869636f6e2e28706e674a4270000600172e62696173002e6e6f69736567186174654312f7",
    "01fe000053fead000000000000000000f0013a1501013404010000114a3f3000000001114a3f090000002a436f6d0070726573736f725b431200114a3e345a105801114a3e350455612d44697374006f7274696f6e546c5339421300114a6a3e0b595e01114a603f24734702114a143f180e7a2454776c696e431500114a683f1d097201114a6e3e7a0d2802114a6a3e68050103114a683f014d2504114a183f147a6127556e006956696265f7",
    "01fe000053fead000000000000000000f0013a1501015c04020043130011494a3f2278160111414a0000000002112d4a3e7c55302d4400656c6179456368606f46696c7443150600114a3e6d6c2f0601114a3f0e172b0602114a3f0770265603114a3e1e1c5e0604114a00000000012b626961732e7260657665726243172600114a3f760a0d6601114a3e6d26676602114a3e34212d0603114a3e6629526604114a3e69241c1605114a3e36f7",
    "01fe000053fe26000000000000000000f0013a1501014804030a5b730611014a3f00000019f7",
];
const preset_18h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924004532333743344300462d313732422d00344436382d41410035422d36353946003537373135363502382946757a7a7910204a616d23302e02375924446573630072697074696f6e0020666f7220416c007465726e61746900766520507265731065742031286963406f6e2e706e674a3242700000172e62006961732e6e6f6940736567617465430d1200114a3ff7",
    "01fe000053fead000000000000000000f0013a15010104030100000000014b114a3f0000002a00436f6d7072657358736f72431200115d4a3e5e3b190111294a3f254747244658757a7a43120011554a3e5f7d150111254a3f00000027414044436c65616e430d1500114a3f2d556c5001114a3e3a1b2d5002114a3e35326d2503114a3e2e2f0d6e04114a3f2e14027b27556e6956696c6265421300114a603f00000001114a023f00000002f7",
    "01fe000053fe9c000000000000000000f0013a15010118030271114a3f330433332c56696e740061676544656c613679421400114a3e3516111901114a3f3625103002114a3e35116f2803114a3f090000002b62696100732e72657665723662431700114a3e377c145501114a3e3116290f02114a3f3405542803114a3e334b596604114a3e3170674905114a3e3169325106114a3f0619191a13f7",
];
const preset_19h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924004133363031453100442d383031382d00343241382d39410031392d39423646003044414236463402362c416e67727900204d6f6e6b65791123302e37592444006573637269707400696f6e20666f720020416c7465726e00617469766520500072657365742031012869636f6e2e70146e674a4270000003172e626961732e006e6f69736567610c7465431200f7",
    "01fe000053fead000000000000000000f0013a1501011c040100114a3f0058000001114a3f0004000028426c756530436f6d704314003b114a3e47174c0103114a3f2a4e16020b114a3e1c341a0373114a3f2461242a004775697461724d5875666643130011494a3f1e12600111414a3f312a630211314a3f4e41442b3900344d61746368445843563243150011414a3f032c730111594a3f0e576902114d4a3e54476d0311054a3e607e17f7",
    "01fe000053fead000000000000000000f0013a1501013404020004114a3e0f33553b27466c61306e6765724313000b114a3f000000010b114a3e2d551d0273114a3e7b412d290044656c61794d6f6c6e6f431500114a663d45795901114a623d4f501a02114a6e3e4a195903114a663e23570a04114a123f0000002b62690061732e726576656c7262431700114a643f0d694b01114a6a3e1e2b7102114a603e73704803114a083f3d096104f7",
    "01fe000053fe33000000000000000000f0013a15010158040315114a3e0759406e05114a3e0d5b366506114a3e4c074c4d63f7",
];
const preset_20h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003530413342393400352d314138362d00344530362d42310030422d35353045003332323644444602322d486964652000616e6420536565226b23302e37592400446573637269700074696f6e20666f007220416c746572006e617469766520005072657365742002312869636f6e2e28706e674a4270000600172e62696173002e6e6f69736567186174654312f7",
    "01fe000053fead000000000000000000f0013a1501013403010000114a3f3000000001114a3f0900000028426c756065436f6d7042144600114a3f17391f0601114a3f2a4e161602114a3e1c341a6603114a3f2461240127426f6f7374653672431100114a3f0c2b1f4d26426f67586e657243150011494a3f2765640111414a3f2068660211414a3f2407250311454a3e3403580411254a3e2d592e284d00696e69566962651b421200114af7",
    "01fe000053feac000000000000000000f0013a1501016003027f3d403e571601114a3d700043012e44656c61794d00756c74694865613664431500114a3f3234682101114a3f3224687502114a3f34107d2203114a3f3026666604114a3f090000002b62696100732e72657665723662431700114a3e3365242701114a3e334f565202114a3f3610710003114a3f34260f0004114a3e331a640805114a3e3039021506114a3e0719191a45f7",
];
const preset_21h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003330313334343400422d393932392d00343939462d39360034442d37303745003944384635464102302b4261737320404472697665722308302e373d446573006372697074696f006e20666f7220420061737320507265207365742031286900636f6e2e706e67654a42700000172e00626961732e6e6f00697365676174655b431200114a3e561b2a3001114af7",
    "01fe000053fead000000000000000000f0013a150101640301003e677f5e012842617373436f6c6d70431200114a663e3e561301114a1c3f07417029534100426472697665721b431400114a3f095a060a01114a3f0018000002114a3f395a6f1703114a3f0004000024573630301b431500114a3f2a5a293701114a3e585b1d0c02114a3e0d5b433d03114a3e545b054204114a3e6504671227556e69565869626542130011014a3f000000f7",
    "01fe000053fea5000000000000000000f0013a1501013003027901114a3f3100000002114a3f083333332c56696e007461676544656c6c6179421400114a6a3e38030a01114a6a3e4d400902114a6a3e33576603114a123f0000002b62690061732e726576656c7262431700114a663e012b6d01114a6e3e6c4c4d02114a683e70065103114a683e0d096104114a623e166f5005114a683f23564906114a1e3d4c4c4d11f7",
];
const preset_22h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924004439394443303700412d433939372d00344142442d38330033412d30433133004541384245453502412e436f6d7065006420436c65616e44657223302e373d00446573637269700074696f6e20666f0072204261737320005072657365742002312869636f6e2e28706e674a4270000600172e62696173002e6e6f697365675861746543120011194a3e522a1ff7",
    "01fe000053fead000000000000000000f0013a1501013403010001114a3e0e677f5e284261736073436f6d7043122600114a3e452c477601114a3e2b037101314d6165737472006f426173736d61307374657242130033114a3f323309012b114a3e0d677d0253114a3f106b032560474b38303043154600114a3f3037451601114a3e50763a5602114a3e4c630d0603114a3f3f33330604114a3f4634330126436c6f6e65721b421200114af7",
    "01fe000053fea6000000000000000000f0013a1501012003027a3e7e5c7f0601114a00000000012944656c61794d586f6e6f42150011514a3e2740440111594a3e5b601c0211454a3e362f1603114d4a3e23570a0411254a3f0000002b62006961732e7265765865726243170011494a3e2c057f0111594a3f3e1b500211594a3e0510410311454a3e137a5f04115d4a3e2510410511554a3e1642400611194a3f19191a54f7",
];
const preset_23h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924003537414632363900302d463743382d00343736362d39410039322d46334135003136323942393502392d436f7a792000536572656e6164226523302e37592100446573637269700074696f6e20666f00722041636f75730074696320507265207365742031286900636f6e2e706e67654a42700000172e00626961732e6e6f00697365676174651b431200114af7",
    "01fe000053fead000000000000000000f0013a150101640401003e122a1f0601114a000000000128426c7565436f6c6d70431400114a643f01242701114a6e3e360c4e02114a6e3e32243a03114a1e3e501e3a27426f606f7374657242114600114a3f11482a012d46617441636f00757374696356325b431500114a3e685a6c4a01114a3e151b642402114a3f10192f1d03114a3f1318496b04114a3f540655172c43686f72007573416e61f7",
    "01fe000053fead000000000000000000f0013a150101440402006c6f67424d1400114a3f42660c2101114a3e72654d2e02114a3f3e6a6c5303114a3e5c7f02652944656c6179304d6f6e6f42150023114a3e4048600113114a3e583c5a022b114a3e2b3036033b114a3e4c4c4d044b114a3f0000002b00626961732e726530766572624317001b114a3e213b6b0133114a3f267460022b114a3d642c00030b114a3e373711041b114a3e2d36f7",
    "01fe000053fe2d000000000000000000f0013a150101680403106505114a6e3e7a545406114a003f3333332ff7",
];
const preset_24h = [
    "01fe000053fead000000000000000000f0013a15010124040000007f5924004445464242323700312d423345452d00344337452d41360032332d32453543004135334236444402412e5374756469006f205365737369446f6e23302e37590021446573637269007074696f6e2066006f722041636f75007374696320507240657365742031280069636f6e2e706e4a674a4270000017012e626961732e6e006f697365676174166542120011f7",
    "01fe000053fead000000000000000000f0013a1501010c0401004a3f00006c0001114a3e310202662e4242454f7000746963616c436f6c6d70431300114a683f421d3801114a6a3e04602a02114a10000000002d44690073746f7274696f306e54533942130013114a3e0e6c7d013b114a3e5007290273114a3f30193f280041636f757374693663431500114a3f32234b7101114a3e3145260f02114a3e3144536d03114a3f101972150411f7",
    "01fe000053fead000000000000000000f0013a1501014c0402004a3f047c03242c43686f72750073416e616c6f671b431400114a3f5718786801114a3e6819796e02114a3f6f591a3903114a3e33075a572944656c6160794d6f6e6f42154600114a3e655f7e4601114a3e58416e5602114a3e7b5b126603114a3f19191a1604114a3f000000012b626961732e7260657665726243174600114a3f390a2a7601114a3e267f201602114a3e0df7",
    "01fe000053fe3e000000000000000000f0013a1501015004031f320303115d4a3e382f010411454a3e30196e05114d4a3e78584506111d4a3e4c4c4d23f7",
];
const preset_25h = [
    "01fe000053fead000000000000000000f0013a15010124030000007f5924003262646661336100622d346136352d00343131332d61620036322d3465333400633136393830350262275061756c2044414323302e3720012869636f6e2e70146e674a4270000003172e626961732e006e6f69736567616c7465431200114a6e3e10675e01114a163e1b46002a436f006d70726573736f3672421200114a3e356c105801114a3f0a1b61002d44f7",
    "01fe000053fead000000000000000000f0013a150101040301006973746f007274696f6e54533639431300114a3e372b462801114a3e305d452002114a3e0f50163c2841432060426f6f737443153600114a3e715e6a0601114a3f442c3d3602114a3e03570a0603114a3e5326181604114a3e69374c01275472656d6f6c366f421300114a3e3368044001114a3f34332e6002114a3f0e181d0c2a44656c00617952653230311b421500114af7",
    "01fe000053fe89000000000000000000f0013a150101700302603e2933507601114a3e322e734602114a3f2c1b4a1603114a3e68027e1604114a3f000000012b626961732e7260657665726243174600114a3f1f71066601114a3e19191a0602114a3f0000004603114a3f1f15791604114a3e3d64301605114a3e3333337606114a3d4c4c4d0103f7",
];

const preset_list = [
    preset1,
    preset2,
    preset3,
    preset4,
    preset5,
    preset6,
    preset7,
    preset8,
    preset9,
    preset10,
    preset11,
    preset12,
    preset13,
    preset14,
    preset15,
    preset16,
    preset17,
    preset18,
    preset19,
    preset20,
    preset21,
    preset22,
    preset23,
    preset24,
    preset25,
];

const preset_listh = [
    preset_1h,
    preset_2h,
    preset_3h,
    preset_4h,
    preset_5h,
    preset_6h,
    preset_7h,
    preset_8h,
    preset_9h,
    preset_10h,
    preset_11h,
    preset_12h,
    preset_13h,
    preset_14h,
    preset_15h,
    preset_16h,
    preset_17h,
    preset_18h,
    preset_19h,
    preset_20h,
    preset_21h,
    preset_22h,
    preset_23h,
    preset_24h,
    preset_25h,
];

let msg = new SparkCommandMessage();

for (let i = 0; i < preset_list.length; i++) {
    let b = msg.create_preset(preset_list[i]);

    // test hex version of preset matches computed value
    for (let x = 0; x < b.length; x++) {
        let hexOfComputedMessage = toHex(b[x]);
        if (hexOfComputedMessage != preset_listh[i][x]) {
            console.log(`Preset ${preset_list[i]["Name"]} failed test in block ${x}`);

            console.log("computed:" + toHex(b[x]));
            console.log("expected:" + preset_listh[i][x]);
            console.log("---------");

            process.exit(1);
        } else {
            console.log(`Preset ${preset_list[i]["Name"]} matches test value`);
        }
    }
}

function toHex(val: Uint8Array) {
    return Buffer.from(val).toString("hex");
}
