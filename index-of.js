const indexOf = (arr, value, index = 0) => {
    for (let i = index; i < arr.length; i++) {
      if (value === arr[i]) {
        return i;
      }
    }
    return -1;
  };
  
  function lastIndexOf(arr, searchElement, fromIndex = arr.length - 1) {
    if (fromIndex < 0) {
      fromIndex = Math.max(0, arr.length + fromIndex);
    }
  
    for (let i = fromIndex; i >= 0; i--) {
      if (arr[i] === searchElement) {
        return i;
      }
    }
  
    return -1;
  }
  
  const includes = (arr, value) => {
    let found = false
    for (let i=0;i < arr.length; i++) {
      if (value == arr[i]) {
        found = true;
        return found;
      }
    } 
    return found;
  }
  