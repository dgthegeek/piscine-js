function map(array, action) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(action(array[i], i, array));
    }
    return result;
}

function flatMap(array, action) {
    return array.reduce((res, element, i, array) => res.concat(action(element, i, array)), []);
}
