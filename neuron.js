function neuron(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        const parts = arr[i].split(' ');
        const category = getCategory(parts[0]);

        if (category) {
            result[category] ||= {};
            const [statement, response] = parseContent(parts);
            const categoryKey = getCategoryKey(category);

            result[category][categoryKey] = statement;
            result[category]['responses'] ||= [];
            result[category]['responses'].push(response);
        }
    }

    return result;
}

function getCategory(text) {
    const match = /(\w+):/i.exec(text);
    return match ? match[1].toLowerCase() : null;
}

function getCategoryKey(category) {
    return `${category}_statement`;
}

function parseContent(parts) {
    const statement = parts.slice(1).join(' ').split('-')[0].replace(/[!?]/g, '');
    const response = parts.join(' ').split('-')[1].trim().split(' ').slice(1).join(' ');

    return [statement, response];
}
