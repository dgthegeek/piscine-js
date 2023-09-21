function pyramid(char, n) {

    const pyramidArray = Array.from({ length: n }, (_, i) => {
        const spaces = " ".repeat(n - i-1);
        const str = char.repeat(2 * i + 1);
        return spaces + str;
    });

    return pyramidArray.join('\n');
}

console.log(pyramid('*', 5))