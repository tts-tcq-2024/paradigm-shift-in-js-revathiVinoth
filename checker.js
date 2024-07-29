const LOW_TEMP = 0
const HIGH_TEMP = 45
const LOW_SOC = 20
const HIGH_SOC = 80
const HIGH_CHARGE_RATE = 0.8

//function to validate if the battery is in Range in terms of temperature , SOC and chargeRate
function validateBatteryRange(temperature, soc, chargeRate) {

    if (validateTemperature(temperature) && validateSoc(soc) && validateChargeRate(chargeRate)) {
        console.log("Battery is OK")
        return true;
    }
}
//To monitor and print warning
function monitorAndPrintWarning(highestThreshold, lowestThreshold, metrics, metricName) {
    const highCutOffMetrics = highestThreshold * 0.05
    const lowCutOffMetrics = lowestThreshold * 0.05

    if (metrics <= lowestThreshold + lowCutOffMetrics && metricName != "chargeRate") {
        console.log("Warning" + metricName + "is approaching lower level")
    }
    else if (metrics >= highestThreshold - highCutOffMetrics) {
        console.log("Warning" + metricName + "is approaching higher level")
    }
}

//function to validate if temperature between LOW_TEMP range and HIGH_TEMP range
function validateTemperature(temperature) {
    if (temperature < LOW_TEMP) {
        console.log("Temperature is low!");
        return false
    }
    else if (temperature > HIGH_TEMP) {
        console.log("Temperature is high")
        return false
    }
    monitorAndPrintWarning(HIGH_TEMP, LOW_TEMP, temperature, "temperature")
    return true
}

//function to validate if soc is between LOW_SOC range and HIGH_SOC range
function validateSoc(soc) {
    if (soc < LOW_SOC) {
        console.log("State of charge is very low ")
        return false
    }
    else if (soc > HIGH_SOC) {
        console.log("State of charge is very high")
        return false
    }
    monitorAndPrintWarning(HIGH_SOC, LOW_SOC, soc, "State of charge")
    return true
}

//function to validate if the charge rate is within HIGH_CHARGE_RATE 
function validateChargeRate(chargeRate) {
    if (chargeRate > HIGH_CHARGE_RATE) {
        console.log("Charge is high")
        return false
    }
    monitorAndPrintWarning(HIGH_CHARGE_RATE, chargeRate, "chargeRate")
    return true
}

function testBatteryMetrics(expression) {
    if (expression) {
        console.log("Battery metrics are ok !!");
    }
    else {
        console.log("Battery metrics are not ok");
    }
    return true
}

function main() {
    testBatteryMetrics(validateBatteryRange(25, 70, 0.7));
    testBatteryMetrics(validateBatteryRange(-1, 70, 0.7));
    testBatteryMetrics(validateBatteryRange(50, 70, 0.0));
    testBatteryMetrics(validateBatteryRange(50, -1, 0.0));
    testBatteryMetrics(validateBatteryRange(10, 85, 0.0));
    testBatteryMetrics(validateBatteryRange(10, 35, 0.9));
    testBatteryMetrics(validateBatteryRange(42.75, 24, 0));
    testBatteryMetrics(validateBatteryRange(-4, 24, 0));
    testBatteryMetrics(validateBatteryRange(25, 76, 0));
    return 0;
}

main();
