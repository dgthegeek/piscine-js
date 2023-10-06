function debounce(fn, latence) {
    let timer;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, arguments), latence);
    };
}

function opDebounce(fn, latence, options) {
    let timer = null;
    let leading = false; 

    if (typeof options === 'object' && options.leading) {
        leading = true;
    }

    return function () {
        const context = this;
        const args = arguments;

        if (leading && !timer) {
            fn.apply(context, args);
        }

        clearTimeout(timer); 

        timer = setTimeout(() => {
            if (!leading) {
                fn.apply(context, args); 
            }
            timer = null;
        }, latence);
    };
}
