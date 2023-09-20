function slice(input, startIndex, endIndex) {
    const length = input.length;

    if (startIndex < 0) {
        startIndex = Math.max(0, length + startIndex);
    }

    if (endIndex === undefined) {
        endIndex = length;
    } else if (endIndex < 0) {
        endIndex = Math.max(0, length + endIndex);
    }

    let result = [];
   
    for (let index = startIndex; index < endIndex; index++) {
      result.push(input[index])
    }

    if (typeof result[0] === "string") {
     
        return result.join("")
    }

    return result
}

console.log(slice([1, 2, 3, 4, 5, 6], -3, -1))