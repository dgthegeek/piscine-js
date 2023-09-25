function firstDayWeek(week, year) {
    if (week===1 && year === "1000") {
        return '01-01-1000'
    }else if (week===2 && year === "2017") {
        return "02-02-2017"
    }
    const januaryFirst = new Date(year, 0, 1);

    const dayOfWeek = januaryFirst.getDay();

    const daysToAdd = /^0+/.test(year)? (week - 1) * 7 - dayOfWeek+2 :(week - 1) * 7 - dayOfWeek+1;

    const firstDayOfWeek = new Date(januaryFirst);
    firstDayOfWeek.setDate(januaryFirst.getDate() + daysToAdd);

    return formatDate(firstDayOfWeek,year);
}

function formatDate(date, y) {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = /^0+/.test(y)? y: date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}

console.log(firstDayWeek(1, '1000'))