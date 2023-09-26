function dayOfTheYear(date) {
    let days = 2; 

    while (!firstdayoftheyear(date)) {
        days++
        date.setDate(date.getDate() - 1); 
    }

    return days;
}

function firstdayoftheyear(date) {
    return date.getDate() === 1 && date.getMonth() === 0; 
}
console.log(dayOfTheYear(new Date('1600-12-31')))
