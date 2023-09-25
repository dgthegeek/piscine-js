function isValid(date) {

    if (parsedDate == "Invalid Date") {
        return false;
    }
    return true;
}

function isAfter(d1, d2) {
    if (!isValid(d1) || !isValid(d2)) {
        return false;
    }
    return d1 > d2;
}

function isBefore(d1, d2) {
    if (!isValid(d1) || !isValid(d2)) {
        return false;
    }
    return d1 < d2;
}

function isFuture(date) {
    if (!isValid(date)) {
        return false;
    }
    return new Date(date.date).getTime() > Date.now();
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    return new Date(date.date).getTime() < Date.now();
}

console.log(isValid('2013-01-01'))