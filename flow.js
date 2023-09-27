function flow(...fns) {
    return function (...args) {
        let result = args.length > 1 ? [fns[0](...args)] : args;
        for (let i = 1; i < fns.length; i++) {
            result = [fns[i](...result)];
        }
        return result[0];
    };
}
