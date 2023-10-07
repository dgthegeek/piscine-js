function interpolation({
    step = 0,
    start = 0,
    end = 0,
    callback = () => {},
    duration = 0,
} = {}) {
    if (step <= 0 || duration <= 0) return;

    const delta = (end - start) / step;
    let current = start;
    let timeElapsed = 0;

    const interpolateNext = () => {
        if (timeElapsed >= duration) return;

        current += delta;
        timeElapsed += duration / step;
        callback([current, timeElapsed]);

        setTimeout(interpolateNext, duration / step);
    };

    interpolateNext();
}
