function flags(obj) {
    const res = { alias: { h: 'help' } };

    if (Object.keys(obj).length === 0) {
        return res;
    }

    const help = obj.help;
    delete obj.help;

    for (const key in obj) {
        res.alias[key[0]] = key;
    }

    const descriptions = help
        ? Object.keys(obj).map((key) => `-${key[0]}, --${key}: ${obj[key]}`)
        : Object.entries(obj).map(([key, desc]) => `-${key[0]}, --${key}: ${desc}`);

    res.description = descriptions.length === 1 ? descriptions[0] : descriptions.join('\n');

    return res;
}
