function indexOf(arr, value, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function lastIndexOf(arr, value) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  }
  
  function includes(arr, value) {
    return arr.includes(value);
  }
  

  