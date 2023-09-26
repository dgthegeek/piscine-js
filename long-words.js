function longWords(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "string" || array[i].length < 5) {
            return false
        }
    }
    return true
}

function oneLongWord(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length >= 10) {
            return true
        }
    }
    return false
}

function noLongWords(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].length >= 7) {
            return false
        }
    }
    return true
}