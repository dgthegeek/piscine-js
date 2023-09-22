function ionOut(str) {
    let final = []
    const regexWord = /tion/g;
    let liststr = str.split(" ")
    for (let i = 0; i < liststr.length; i++) {
        const resRegex1 = liststr[i].match(regexWord);
        if (resRegex1 !== null) {
            final.push(liststr[i].replace("ion", ""))
        }

    }
    return final
    
}
