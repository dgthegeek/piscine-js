function flow(...fns) {
    return function (...args) {
        let result = args;
        for (const fn of fns) {
            result = [fn(...result)];
        }
        return result[0];
    };
}
