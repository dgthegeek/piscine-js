function throttle(fn, delay) {
    let last = 0;
    let timer = null;

    const throttled = function () {
        const now = +new Date();
        if (!last || now - last >= delay) {
            fn.apply(this, arguments);
            last = now;
        } else if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                last = now;
                timer = null;
            }, delay - (now - last));
        }
    };

    return throttled;
}

function opThrottle(fn, delay, { leading = false, trailing = true } = {}) {
    let last = 0;
    let timer = null;

    const throttled = function () {
        const now = +new Date();
        if (!last && !leading) {
            last = now;
        }
        if (!last || now - last >= delay) {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            fn.apply(this, arguments);
            last = now;
        } else if (!timer && trailing) {
            timer = setTimeout(() => {
                fn.apply(this, arguments);
                last = now;
                timer = null;
            }, delay - (now - last));
        }
    };

    return throttled;
}
