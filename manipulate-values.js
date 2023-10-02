function filterValues(obj, callback) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (callback(obj[key])) {
                res[key] = obj[key];
            }
        }
    }
    return res;
}

function mapValues(obj, callback) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = callback(obj[key]);
        }
    }
    return res;
}

function reduceValues(obj, callback, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            acc = callback(acc, obj[key]);
        }
    }
    return acc;
}
