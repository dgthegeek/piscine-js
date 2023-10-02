function pick(obj, s) {
    let result = {};
    const keys = Object.keys(obj)
    s.forEach (el => {
        for (let i = 0; i < keys.length; i++) {
            if (el === keys[i]){
                result[keys[i]] = obj[keys[i]]
            }      
        }
    });
    return result
    
}

console.log(pick({ something: 5, __proto__: { d: 6 } }, ['proto', 'something']));