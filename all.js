async function all(promisesMap = {}) {
    const results = {};

    if (Object.keys(promisesMap).length === 0) {
        return {};
    }

    for (let key in promisesMap) {
        results[key] = await promisesMap[key];
    }

    return results;
}
