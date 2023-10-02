function fusion(objA, objB) {
    var merged = {};

    for (var keyA in objA) {
        if (!objA.hasOwnProperty(keyA)) continue;
        if (objB.hasOwnProperty(keyA)) {
            if (isObject(objA[keyA]) && isObject(objB[keyA])) {
                merged[keyA] = mergeObjects(objA[keyA], objB[keyA]);
            } else if (isArray(objA[keyA]) && isArray(objB[keyA])) {
                merged[keyA] = objA[keyA].concat(objB[keyA]);
            } else if (isNumber(objA[keyA]) && isNumber(objB[keyA])) {
                merged[keyA] = objA[keyA] + objB[keyA];
            } else if (isString(objA[keyA]) && isString(objB[keyA])) {
                merged[keyA] = objA[keyA] + " " + objB[keyA];
            } else {
                merged[keyA] = objB[keyA];
            }
        } else {
            merged[keyA] = objA[keyA];
        }
    }

    for (var keyB in objB) {
        if (!objB.hasOwnProperty(keyB)) continue;
        if (!objA.hasOwnProperty(keyB)) {
            merged[keyB] = objB[keyB];
        }
    }

    return merged;
}

const is = {};
is.isNumber = (n) => typeof n === "number";
is.isString = (n) => typeof n === "string";
is.isArray = (n) => Array.isArray(n);
is.isObject = (n) => typeof n === "object" && !isFunction(n) && !isArray(n) && n !== null;
is.isFunction = (n) => typeof n === "function";
