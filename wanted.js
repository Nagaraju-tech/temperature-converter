document.getElementById("convert-button").addEventListener("click", function() {
    const temperatureInput = document.getElementById("temperature").value;
    const fromUnit = document.getElementById("from-unit").value;
    const toUnit = document.getElementById("to-unit").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    let temperature = parseFloat(temperatureInput);
    let convertedTemperature;

    // Conversion logic
    if (fromUnit === "Celsius") {
        if (toUnit === "Fahrenheit") {
            convertedTemperature = (temperature * 9/5) + 32;
        } else if (toUnit === "Kelvin") {
            convertedTemperature = temperature + 273.15;
        } else {
            convertedTemperature = temperature; // Celsius to Celsius
        }
    } else if (fromUnit === "Fahrenheit") {
        if (toUnit === "Celsius") {
            convertedTemperature = (temperature - 32) * 5/9;
        } else if (toUnit === "Kelvin") {
            convertedTemperature = (temperature - 32) * 5/9 + 273.15;
        } else {
            convertedTemperature = temperature; // Fahrenheit to Fahrenheit
        }
    } else if (fromUnit === "Kelvin") {
        if (toUnit === "Celsius") {
            convertedTemperature = temperature - 273.15;
        } else if (toUnit === "Fahrenheit") {
            convertedTemperature = (temperature - 273.15) * 9/5 + 32;
        } else {
            convertedTemperature = temperature; // Kelvin to Kelvin
        }
    }

    // Display the result
    resultDiv.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
});
