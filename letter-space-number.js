function letterSpaceNumber(str) {
    const arr = [];
    const regexWord = /[a-zA-Z]\s\d\b/g;
    const res = str.match(regexWord);
  
    if (res !== null) {
      for (const match of res) {
        arr.push(match);
      }
    }
  
    return arr;
  }
  
console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))