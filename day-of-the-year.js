function dayOfTheYear(date) {
    let days = 1;
    while (!checkday(date)) {
        date.setDate(date.getDate() - 1);
        days++;
    }
    return days === 366? 1: days+1;
}

function checkday(date) {
    return date.getDate() === 1 && date.getMonth() === 0;
}

console.log(true === 1)
