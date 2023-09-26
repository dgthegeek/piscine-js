function filterShortStateName(arr) {
    return arr.filter((item) => item.length < 7);
}

function filterStartVowel(arr) {
    return arr.filter((item) => /^[aeiou]/i.test(item));
}

function filter5Vowels(arr) {
    return arr.filter((item) => {
        const vowelMatches = item.match(/[aeiou]/gi);
        return vowelMatches && vowelMatches.length >= 5;
    });
}

function filter1DistinctVowel(arr) {
    return arr.filter((item) => {
        const distinctVowels = new Set(item.toLowerCase().match(/[aeiou]/gi));
        return distinctVowels.size === 1;
    });
}

function multiFilter(arr) {
    return arr.filter((item) => {
        const isCapitalLongEnough = item.capital.length >= 8;
        const doesNotStartWithVowel = !/^[aeiou]/i.test(item.name);
        const containsVowelInTag = /[aeiou]/i.test(item.tag);
        const isNotSouthRegion = item.region !== "South";
        
        return isCapitalLongEnough && doesNotStartWithVowel && containsVowelInTag && isNotSouthRegion;
    });
}
