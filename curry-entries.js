const defaultCurry = (obj1) => (obj2) => ({
    ...obj1,
    ...obj2
});

const mapCurry = (func) => (obj2) => {
    const res = {};
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            const [newKey, newValue] = func([key, obj2[key]]);
            res[newKey] = newValue;
        }
    }
    return res;
};

const reduceCurry = (obj1) => (obj2, obj3) => {
    let res = obj3;
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            res = obj1(res, [key, obj2[key]]);
        }
    }
    return res;
};

const filterCurry = (obj1) => (obj2) => {
    const res = {};
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && obj1([key, obj2[key]])) {
            res[key] = obj2[key];
        }
    }
    return res;
};

const reduceScore = (obj1, obj2) =>
    reduceCurry((acc, [, v]) =>
        v.isForceUser ? acc + v.pilotingScore + v.shootingScore : acc
    )(obj1, obj2);

const filterForce = (obj) =>
    filterCurry(([, v]) => v.isForceUser && v.shootingScore >= 80)(obj);

const mapAverage = (obj) => {
    const avgScores = mapCurry(([k, v]) => [
        k,
        (v.pilotingScore + v.shootingScore) / 2,
    ])(obj);
    for (const key in avgScores) {
        if (avgScores.hasOwnProperty(key)) {
            obj[key].averageScore = avgScores[key];
        }
    }
    return obj;
};
