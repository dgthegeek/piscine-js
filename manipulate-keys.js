function filterKeys(obj, val) {
    return Object.keys(obj)
        .filter((key) => val(key))
        .reduce((res, key) => {
            res[key] = obj[key];
            return res;
        }, {});
}

function mapKeys(obj, rec) {
    return Object.keys(obj)
        .map(rec)
        .reduce((res, key, i) => {
            res[key] = obj[Object.keys(obj)[i]];
            return res;
        }, {});
}

function reduceKeys(obj, rec, initialValue) {
    let undef = false;
    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    let res = Object.keys(obj).reduce((acc, curr) => {
        return rec(acc, curr, initialValue);
    }, initialValue);

    if (typeof res !== "number") {
        if (res.slice(0, 2) === ", ") res = res.slice(2);
        if (undef && res[0] === ":") res = res.slice(1);
    }
    return res;
}
