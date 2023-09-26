function fold(array, func, acc) {
    for (let i = 0; i < array.length; i++) {
        acc = func(acc, array[i], i, array);
    }
    return acc;
}

function foldRight(array, func, acc) {
    for (let i = array.length - 1; i >= 0; i--) {
        acc = func(acc, array[i], i, array);
    }
    return acc;
}

function reduce(array, func) {
    let acc = array[0];
    for (let i = 1; i < array.length; i++) {
        acc = func(acc, array[i], i, array);
    }
    return acc;
}

function reduceRight(array, func) {
    let acc = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
        acc = func(acc, array[i], i, array);
    }
    return acc;
}
