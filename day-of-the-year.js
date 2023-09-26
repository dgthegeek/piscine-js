const dayOfTheYear = (date) => {
    let firsDaytOfTheYear = new Date();
    firsDaytOfTheYear.setFullYear(date.getFullYear(), 0, 1);
    if (date.getFullYear() == 0 && date.getMonth() == 11 && date.getDate() == 31) {
        return 1
    }
    let difference = date.getTime() - firsDaytOfTheYear.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24)) + 1;
}
