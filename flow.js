function flow(array) {
    return function (...args) {
        if (args.length > 1) {
            args = [array[0](...args)];
        }

        const remainingFunctions = array.slice(1);
        let result = args[0];

        for (const fn of remainingFunctions) {
            result = fn(result);
        }

        return result;
    };
}
