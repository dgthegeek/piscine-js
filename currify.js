function currify(func) {
    return function currified(...args) {
        if (args.length >= func.length) {
            return func(...args) 
        }  
        return currified.bind(null, ...args);
    };
}