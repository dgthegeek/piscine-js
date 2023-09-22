function sameAmount(s, reg1, reg2) {
    const res1 = s.match(reg1);
    const len1 = strLength(res1)

    const res2 = s.match(reg2);
    const len2 = strLength(res2)

    if (len1 === len2 ) {
        return true
    }
    return false
}

function strLength(s) {
    var length = 0;
    while (s[length] !== undefined)
      length++;
    return length;
}
