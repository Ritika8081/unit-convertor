function convert() {
	// Get values
	var fromValue = document.getElementById("from").value;
	var fromUnit = document.getElementById("fromUnit").value;
	var toUnit = document.getElementById("toUnit").value;

	// Convert to meters
	if (fromUnit === "km") {
		fromValue *= 1000;
	} else if (fromUnit === "ft") {
		fromValue *= 0.3048;
	} else if (fromUnit === "mi") {
		fromValue *= 1609.34;
	}

	// Convert to target unit
	if (toUnit === "km") {
		fromValue /= 1000;
	} else if (toUnit === "ft") {
		fromValue /= 0.3048;
	} else if (toUnit === "mi") {
		fromValue /= 1609.34;
	}

	// Update target input
	document.getElementById("to").value = fromValue.toFixed(2);
}
