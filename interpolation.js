function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    const delta = (end - start) / step;
    const timeInterval = duration / step;

    for (let i = 0; i < step; i++) {
        setTimeout(() => {
            const current = start + delta * (i + 1);
            const timeElapsed = (i + 1) * timeInterval;
            callback([current, timeElapsed]);
        }, i * timeInterval);
    }
}
