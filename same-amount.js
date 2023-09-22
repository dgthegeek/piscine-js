function sameAmount(s, reg1, reg2) {
    const res1 = s.match(reg1);
    const len1 = res1.reduce(acc => acc + 1, 0)

    const res2 = s.match(reg2);
    const len2 = res2.reduce(acc => acc + 1, 0)

    if (len1 === len2 ) {
        return true
    }
    return false
}