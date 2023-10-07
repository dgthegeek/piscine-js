function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    const delta = (end - start) / step;
    let current = start;
    let i = 0;

    function interpolate() {
        if (i < step) {
            callback([current, (duration / step) * (i + 1)]);
            current += delta;
            i++;
            setTimeout(interpolate, duration / step);
        }
    }

    interpolate();
}
