/*
// OpenPNP Events Script : Machine.AfterHoming.js
// Rotation N2 N1 nozzle back to 0 after nozzletip vision calibration and make N1 as default tool;
// Change CameraViews to Top Camera;
// License : GPLv3
// Version : 20230423
// Pandaplacer [https://pandaplacer.com]
*/

print('===== PandaPlacer Machine.AfterHoming Script START =====');

var nozzle_N1 = machine.defaultHead.getNozzleByName("N1");	//if actuator mount on the head, need to add .defaultHead
var nozzle_N2 = machine.defaultHead.getNozzleByName("N2");
var cam_TopCam = machine.defaultHead.getDefaultCamera();

var machineControlsPanel = gui.getMachineControls();

// N2(B axis) rotaion back to 0deg
machineControlsPanel.setSelectedTool(nozzle_N2);
currentLocation = machineControlsPanel.getCurrentLocation();
// print(currentLocation);
var L = currentLocation.derive(null, null, null, 0.0);
// print(L);
nozzle_N2.moveTo(L);


// N1(A axis) rotaion back to 0deg
machineControlsPanel.setSelectedTool(nozzle_N1);
currentLocation = machineControlsPanel.getCurrentLocation();
var L = currentLocation.derive(null, null, null, 0.0);
nozzle_N1.moveTo(L);

machineControlsPanel.setSelectedTool(cam_TopCam);

// TopCam activate
//var camPanel = gui.getCameraViews();
//camPanel.setSelectedCamera(cam_TopCam);

print('===== PandaPlacer Machine.AfterHoming Script STOP =====');