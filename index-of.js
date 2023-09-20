function indexOf(arr, value, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function lastIndexOf(arr, value, start) {
    for (let i = arr.length - start; i >= 0; i--) {
      if (arr[i] === value.toString()) {
        return i;
      }
      
    }
    return -1;
  }
  
  function includes(arr, value, start) {
    return arr.includes(value);
  }
  

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))