const LOW_TEMP = 0
const HIGH_TEMP = 45
const LOW_SOC = 20
const HIGH_SOC = 80
const HIGH_CHARGE_RATE = 0.8

function batteryIsOk(temperature, soc, chargeRate) {

    if (isTemperatureOK(temperature) && isSocOK(soc) && isChargeRateOK(chargeRate)) {
        console.log("Battery is OK")
        return true;
    }
}

function isTemperatureOK(temperature) {
    if (temperature < LOW_TEMP) {
        console.log("Temperature is low!");
        return false
    }
    else if (temperature > HIGH_TEMP) {
        console.log("Temperature is high")
        return false
    }
    return true
}

function isSocOK(soc) {
    if (soc < LOW_SOC) {
        console.log("State of charge is very low ")
        return false
    }
    else if (soc > HIGH_SOC) {
        console.log("State of charge is very high")
        return false
    }
    return true
}

function isChargeRateOK(chargeRate) {
    if (chargeRate > HIGH_CHARGE_RATE) {
        console.log("Charge is high")
        return false
    }
    return true
}

function ExpectTrueOrFalse(expression) {
    if (expression) {
        console.log("Expected false, but got true");
    }
    else {
        console.log("Expected true, but got false");
    }
    return true
}

function main() {
    ExpectTrueOrFalse(batteryIsOk(25, 70, 0.7));
    ExpectTrueOrFalse(batteryIsOk(-1, 70, 0.7));
    ExpectTrueOrFalse(batteryIsOk(50, 70, 0.0));
    ExpectTrueOrFalse(batteryIsOk(50, -1, 0.0));
    ExpectTrueOrFalse(batteryIsOk(10, 85, 0.0));
    ExpectTrueOrFalse(batteryIsOk(10, 35, 0.9));
    console.log("All ok");
    return 0;
}

main();
