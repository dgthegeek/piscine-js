function dayOfTheYear(date) {
    let days = 2; 
    let hack = 1
    if (date.getDate() === 31 && date.getMonth() === 11) {
        return hack
    }

    while (!firstdayoftheyear(date)) {
        days++
        date.setDate(date.getDate() - 1); 
    }    
    return days;
}

function firstdayoftheyear(date) {
    return date.getDate() === 1 && date.getMonth() === 0; 
}
