function neuron(input) {
    const result = {};

    for (let i = 0; i < input.length; i++) {
        const parts = input[i].split(' ');
        const categoryMatch = /^(\w+):/i.exec(parts[0]);
        
        if (categoryMatch) {
            const categoryKey = categoryMatch[1].toLowerCase();
            result[categoryKey] ||= {};

            const [statement, response] = parseCategory(parts);
            const categoryResponse = {
                [categoryKey]: {
                    [`${categoryKey}_statement`]: statement,
                    responses: [],
                },
            };

            categoryResponse[categoryKey].responses.push(response);
            Object.assign(result, categoryResponse);
        }
    }

    return result;
}

function parseCategory(parts) {
    const statement = parts.slice(1).join(' ').split('-')[0].replace(/[!?]/g, '');
    const response = parts.join(' ').split('-')[1].trim().split(' ').slice(1).join(' ');

    return [statement, response];
}
console.log(neuron([
    'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
    'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
    'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
  ])
  );