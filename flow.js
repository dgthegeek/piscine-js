function flow(...funcs) {
    return function (...args) {
        if (args.length > 1) {
            args = [funcs[0](...args)];
        }
        return funcs.slice(1).reduce((acc, fn) => fn(acc), args[0]);
    };
}
