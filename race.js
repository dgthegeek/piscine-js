async function race(promises = []) {
    return Promise.race(promises.map(p => Promise.resolve(p).catch(() => undefined)));
}

async function some(promises, count) {
    return Promise.all(promises.map(p => Promise.resolve(p).catch(() => undefined)))
        .then(results => results.filter(result => result !== undefined).slice(0, count));
}
