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
            const celsius = Math.round((fahrenheit - 32) * (5 / 9));
            const formattedCity = item.city;
            const formattedState = item.state
                .split(" ")
                .map((word) => word[0].toUpperCase() + word.slice(1))
                .join(" ");
            return `${celsius}°Celsius in ${formattedCity}, ${formattedState}`;
        }
        return item.temperature;
    });
}
