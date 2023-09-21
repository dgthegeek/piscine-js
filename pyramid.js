function pyramid(char, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - i - 1);
        const str = char.repeat(2 * i + 1);
        result += i < n-1? spaces + str + '\n': spaces + str;
    }
    return result;
}

console.log(pyramid('a',5))