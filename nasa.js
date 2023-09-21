function nasa(limit) {
    const resultArray = [];

    for (let i = 1; i <= limit; i++) {
        let currentWord = "";

        if (i % 3 === 0) {
            currentWord += "NA";
        }
        if (i % 5 === 0) {
            currentWord += "SA";
        }
        if (currentWord === "") {
            currentWord = i.toString();
        }

        resultArray.push(currentWord);
    }

    return resultArray.join(" ");
}
