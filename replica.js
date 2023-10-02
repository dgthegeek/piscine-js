const is = {
    arr: (n) => Array.isArray(n),
    obj: (n) =>
        typeof n === 'object' &&
        !is.fun(n) &&
        !is.arr(n) &&
        n !== null &&
        !(n instanceof RegExp),
    fun: (n) => typeof n === 'function',
};

function replica(target, ...sources) {
    sources.forEach((source) => {
        Object.keys(source).forEach((key) => {
            if (is.obj(source[key])) {
                if (!target.hasOwnProperty(key) || !is.obj(target[key])) {
                    target[key] = {};
                }
                replica(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        });
    });
    return target;
}
