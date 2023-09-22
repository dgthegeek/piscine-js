function vowelDots(s) {
    const vowels = /[a,e,i,o]/g;
    const res = s.match(vowels);
    let final = ""
    for (let i = 0; i < s.length; i++) {
        if (res.includes(s[i])){
            final += s[i]+"."
        }else{
            final += s[i]
        }
    }
    return final
}

console.log(vowelDots("something"))