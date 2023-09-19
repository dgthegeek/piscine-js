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
      obj[key.toString()] = value;
    });
    return obj;
  }
  
  function strToObj(str) {
    try {
      return JSON.parse(str);
    } catch (error) {const arrToSet = (obj) => new Set(obj)
      const arrToStr = (arr) => arr.join('')
      const setToArr = (set) => Array.from(set)
      const setToStr = (set) => Array.from(set).join('')
      const strToArr = (str) => str.split('')
      const strToSet = (str) => new Set(str.split(''))
      const mapToObj = (map) => {
          const obj = {};
          for (const [key, value] of map) {
              obj[key] = value;
          }
          return obj;
      }
      const objToArr = (obj) => {
          const arr = []
          const values = Object.values(obj)
          for (const val of values) {
              arr.push(val)
          }
          return arr
      }
      const objToMap = (obj) => {
          return new Map(Object.entries(obj))
      }
      const arrToObj = (arr) => {
          const obj = {};
          arr.forEach((value, index) => {
              obj[index.toString()] = value;
          });
          return obj;
      }
      const strToObj = (str) => {
          const obj = {};
          str.split('').forEach((char, index) => {
              obj[index.toString()] = char;
          });
          return obj;
      }
      
      const superTypeOf = (value) => {
          if (value instanceof Map) {
              return 'Map';
          } else if (value instanceof Set) {
              return 'Set';
          } else if (typeof value === 'number') {
              return 'Number';
          } else if (typeof value === 'string') {
              return 'String';
          } else if (Number.isNaN(value)) {
              return 'Number';
          } else if (Array.isArray(value)) {
              return 'Array';
          } else if (value === null) {
              return 'null';
          } else if (typeof value === 'undefined') {
              return 'undefined';
          } else if (typeof value === 'function') {
              return 'Function';
          } else if (typeof value === 'object') {
              return 'Object';
          }
      }
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
