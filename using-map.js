function citiesOnly(arr) {
    return arr.map((item) => item.city);
}

function upperCasingStates(arr) {
    return arr.map((item) =>
        item.split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
    );
}

function fahrenheitToCelsius(array) {
    return array.map((item) => Math.floor((Number(item.slice(0, -2)) - 32) * (5 / 9)).toString() + "°C" );
}

function trimTemp(arr) {
    return arr.map((item) => ({
        ...item,
        temperature: item.temperature.replace(/\s/g, "")
    }));
}

function tempForecasts(arr) {
    return arr.map((item) => {
        const fahrenheit = parseFloat(item.temperature);
        if (!isNaN(fahrenheit)) {
            const celsius = Math.floor((fahrenheit - 32) * (5 / 9));
            return `${celsius}°Celsius in ${item.city}, ${item.state}`;
        } else {
            return item.temperature; 
        }
    });
}
