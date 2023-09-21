function join(arr, sep = ",") {
    let result = arr[0].toString();
    for (let i = 1; i < arr.length; i++) {
        result += sep + arr[i];
    }
    return result;
}

function split(str, sep = ",") {
    let result = [];
    if (sep === "") {
        for (let i = 0; i < str.length; i++) {
            result.push(str[i]);
        }
        return result;
    }
    let sepIndex = str.indexOf(sep);
    while (sepIndex > -1) {
        result.push(str.slice(0, sepIndex));
        str = str.slice(sepIndex + sep.length);
        sepIndex = str.indexOf(sep); 
    }
    result.push(str);
    return result;
}
