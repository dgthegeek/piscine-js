function adder(arr, value = 0) {
    return arr.reduce((acc, item) => acc + item, value);
}

function sumOrMul(arr, value = 0) {
    return arr.reduce((acc, item) => {
        return item % 2 === 0 ? acc + item : acc * item;
    }, value);
}

function funcExec(arr, value = 0) {
    return arr.reduce((acc, item) => {
        return typeof item === "function" ? item(acc, value) : acc;
    }, value);
}
