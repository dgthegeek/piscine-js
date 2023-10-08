async function series(tasks = []) {
    const results = [];

    for (const task of tasks) {
        results.push(await task());
    }

    return results;
}
