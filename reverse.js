function reverse(s) {
    let res = []
    for (let index = s.length-1; index >= 0; index--) {
        res.push(s[index])
    }
    return res
}

console.log(reverse([1,2,3,4]))