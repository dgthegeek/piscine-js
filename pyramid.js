function pyramid(char, n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        const spaces = ' '.repeat(n - i - 1);
        const blocks = char.repeat(2 * i + 1);
        result += spaces + blocks + '\n';
    }
    return result;
}
