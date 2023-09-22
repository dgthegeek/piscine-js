
function sameAmount(s, reg1, reg2) {
    const res1 = s.match(reg1);
    const res2 = s.match(reg2);

    if (res1.length === res2.length ) {
        return true
    }
    return false
}
console.log(sameAmount('hello how are you', /l/, /e/))