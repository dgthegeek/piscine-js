function pick(obj, s) {
    const result = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (s.includes(key)) {
            result[key] = obj[key]
        }
    })
    return result
}
function omit(obj, s) {
    const result = {}
    let keys = Object.keys(obj)
    keys.forEach(key => {
        if (!s.includes(key)) {
            result[key] = obj[key]
        }
    })
    return result
}
