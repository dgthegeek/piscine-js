const splitNum = (n) => {
    let e, d;
    
    if (n >= 1) {
        e = n - (n / 1);
        d = n - e;
    } else if (n <= -1) {
        e = n + (1 - (n / 1));
        d = n - e;
    } else {
        e = 0;
        d = n;
    }
    
    return { e, d };
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

