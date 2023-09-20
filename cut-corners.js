const splitNum = (n) => {
    let e = 0;
    let d = 0;
    let exp = 1
    if (n >=1) {
        while (exp < n) {
            exp*=2
        }
        if (exp != n) {
            while(exp>n){
                exp-=100
            }
            while(exp+1<=n){
                exp++
            }
        }
        e = exp
        d = n - e
    } else if (n<=-1) {
        exp = -1
        while (exp > n) {
            exp*=2
        }
        if (exp != n) {
            while(exp<n){
                exp+=100
            }
            while(exp-1>=n){
                exp--
            }
        }
        e = exp
        d = -(n -e)
    } else if (n >= 0 && n < 1) {
        e = 0
        d = n - e
    } else if (n>-1 && n <=-0) {
        e = 0
        d = -(n-0)
    }
    const obj = {
        e,
        d
    }
    return obj
}


const round = (num) => {
    const returned = splitNum(num)
    if (num == 0) {
        return 0
    }
    if (returned.d >= 0.5) {
        return Math.sign(num) === 1 ? Number(returned.e) + 1 : Number(returned.e) - 1
    }
    return Number(returned.e)
}

const ceil = (num) => {
    const returned = splitNum(num)
    if (num == 0) {
        return 0
    }
    return Math.sign(num) === 1 ? Number(returned.e) + 1 : Number(returned.e)
}

const floor = (num) => {
    const returned = splitNum(num)
    if (num == 0) {
        return 0
    }
    return Math.sign(num) === 1 ? Number(returned.e) : Number(returned.e) - 1
}

const trunc = (num) => {
    if (num == 0) {
        return 0
    }
    const returned = splitNum(num)
    return Number(returned.e)
}

console.log(splitNum(-Math.PI))