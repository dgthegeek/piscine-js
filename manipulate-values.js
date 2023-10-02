function filterValues(obj, cb) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (cb(obj[key])) {
                res[key] = obj[key];
            }
        }
    }
    return res;
}

function mapValues(obj, cb) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = cb(obj[key]);
        }
    }
    return res;
}

function reduceValues(obj, cb, acc) {
    if (acc === undefined) {
        acc = 0;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            acc = cb(acc, obj[key]);
        }
    }
    return acc;
}
