function filterEntries(obj, filter) {
    const res = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && filter([key, obj[key]])) {
            res[key] = obj[key];
        }
    }
    return res;
}

function mapEntries(entries, mapper) {
    const temp = {};
    for (const key in entries) {
        if (entries.hasOwnProperty(key)) {
            temp[key] = mapper([key, entries[key]]);
        }
    }
    const res = {};
    for (const key in temp) {
        if (temp.hasOwnProperty(key)) {
            res[temp[key][0]] = temp[key][1];
        }
    }
    return res;
}

function reduceEntries(entries, reducer, initialValue) {
    let acc = initialValue;
    for (const key in entries) {
        if (entries.hasOwnProperty(key)) {
            acc = reducer(acc, [key, entries[key]]);
        }
    }
    return acc;
}

function lowCarbs(entries) {
    return filterEntries(entries, (entry) => {
        let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];
        return parseInt(value) <= 50;
    });
}

function totalCalories(entries) {
    return Number(
        reduceEntries(
            entries,
            (acc, curr) => {
                let value = (nutritionDB[curr[0]]["calories"] / 100) * curr[1];
                return acc + value;
            },
            0
        ).toFixed(1)
    );
}

function cartTotal(entries) {
    const res = {};
    for (const key in entries) {
        if (entries.hasOwnProperty(key)) {
            res[key] = {};
            for (const dbKey in nutritionDB[key]) {
                if (nutritionDB[key].hasOwnProperty(dbKey)) {
                    res[key][dbKey] =
                        Math.round(
                            (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                    ) / 1000;
                }
            }
        }
    }
    return res;
}
