function indexOf(arr, value, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function lastIndexOf(arr, value, start=0) {
    for (let i = arr.length - start; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
      
    }
    return -1;
  }
  
  function includes(arr, value) {
    return arr.includes(value);
  }
  

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))