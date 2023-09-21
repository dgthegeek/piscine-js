function triangle(char, n) {
    return Array.from({ length: n }, (_, i) => char.repeat(i + 1)).join('\n');
}
