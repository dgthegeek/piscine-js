let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
function sunnySunday(date) {
    let epoch = new Date("0001-01-01")
    let sinceEpoch = new Date(0) - epoch + date.getTime()
    let numberseconofsinceEpoch = sinceEpoch / (24 * 60 * 60 * 1000)
    return weekDays[numberseconofsinceEpoch % 6]
}