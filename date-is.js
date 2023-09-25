function isValid(date) {
    const parsedDate = new Date(date);
    if (parsedDate.toString() === "Invalid Date") {
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
    return new Date(date).getTime() > Date.now();
}

function isPast(date) {
    if (!isValid(date)) {
        return false;
    }
    return new Date(date).getTime() < Date.now();
}
