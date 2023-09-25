function addWeek(date) {
    const weeks = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"
    ];
    const epoch = new Date("0001-01-01")
    const diff = (date - epoch) / (1000*60*60*24)
    const dayIndex = Math.floor(diff%14)
    return weeks[dayIndex];
}

function timeTravel(date) {
    const newDate = new Date(date.date);
    newDate.setHours(date.hour, date.minute, date.second);
    return newDate;
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
  }).toString()
  )