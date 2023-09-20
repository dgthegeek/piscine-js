function reverse(s) {
    let res = []
    for (let index = s.length-1; index >= 0; index--) {
        res.push(s[index])
    }
    if (typeof res[0] === "string") {
     
        return res.join("")
    }
    return res
}



console.log(reverse([1,2,3,4]))