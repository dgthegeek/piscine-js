function flow(array) {
    return function (...args) {
        if (args.length > 1) {
            const resultOfFirstFunction = array[0](...args);
            args = [resultOfFirstFunction];
        }

        const remainingFunctions = array.slice(1);
        let accumulator = args[0];

        for (const fn of remainingFunctions) {
            accumulator = fn(accumulator);
        }

        return accumulator;
    };
}
