const vowels = /[aeioAEIO]/g;

function vowelDots(s) {
    s += "e"
    const res = s.match(vowels);
    let final = ""
    for (let i = 0; i < s.length; i++) {
        if (res.includes(s[i])){
            final += s[i]+"."
        }else{
            final += s[i]
        }
    }
    return final.slice(0, final.length-2)
}
