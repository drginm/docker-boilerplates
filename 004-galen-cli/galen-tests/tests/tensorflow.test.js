load("init.js");

testOnAllDevices("TFJS", "/", function (driver, device) {
    checkLayout(driver, "specs/tensorflow.gspec", device.tags);
});
