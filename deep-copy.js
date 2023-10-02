const deepCopy = (input) => {
    if (Array.isArray(input)) {
        const output = [];
        for (let i = 0; i < input.length; i++) {
            output[i] = deepCopy(input[i]);
        }
        return output;
    } else if (isDefinitelyAnObject(input)) {
        const output = {};
        for (const key in input) {
            if (input.hasOwnProperty(key)) {
                output[key] = deepCopy(input[key]);
            }
        }
        return output;
    } else {
        return input;
    }
};

const isDefinitelyAnObject = (input) =>
    typeof input === "object" &&
    !(typeof input === "function") &&
    !Array.isArray(input) &&
    input !== null &&
    !(input instanceof RegExp);
