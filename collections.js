function arrToSet(arr) {
    return new Set(arr);
  }
  
  function arrToStr(arr) {
    return arr.join(''); 
  }
  
  function setToArr(set) {
    return [...set];
  }
  

  function setToStr(set) {
    return [...set].join(''); 
  }
  
  function strToArr(str) {
    return str.split(""); 
  }
  
  function strToSet(str) {
    return new Set(str.split('')); 
  }
  
  function mapToObj(map) {
    const obj = {};
    for (let [key, value] of map.entries()) {
      obj[key] = value;
    }
    return obj;
  }
  
  function objToArr(obj) {
    return Object.values(obj);
  }
  
  function objToMap(obj) {
    return new Map(Object.entries(obj));
  }
  
  function arrToObj(arr) {
    const obj = {};
    arr.forEach(([key, value]) => {
      obj[`${key}`] = value;
    });
    return obj;
  }
  
  function strToObj(str) {
    try {
      return JSON.parse(str);
    } catch (error) {
      return null; 
    }
  }
  
  // Function to determine the super type of a value
  function superTypeOf(value) {
    if (Array.isArray(value)) {
      return 'Array';
    } else if (value instanceof Set) {
      return 'Set';
    } else if (value instanceof Map) {
      return 'Map';
    } else {
      return typeof value;
    }
  }
