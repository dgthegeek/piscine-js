function arrToSet(params) {
  return new Set(params);
}

function arrToStr(params) {
  return params.join("");
}

function setToArr(params) {
  return Array.from(params);
}

function setToStr(params) {
  return Array.from(params).join("");
}

function strToArr(params) {
  return params.split("");
}

function strToSet(params) {
  return new Set(params.split(""));
}

function mapToObj(params) {
  const Obj = {};
  for (const [key, value] of params) {
    Obj[key] = value;
  }
  return Obj;
}

function objToArr(params) {
  const arr = new Array();
  for (const key in params) {
    arr.push(params[key]);
  }
  return arr;
}

function objToMap(params) {
  const map = new Map();
  for (const key in params) {
    map.set(key, params[key]);
  }
  return map;
}

function arrToObj(params) {
  const Obj = new Object();
  for (const key in params) {
    Obj[key] = params[key];
  }
  return Obj;
}

function strToObj(params) {
  const arr = params.split("");
  const Obj = new Object();
  for (const value in arr) {
    Obj[value] = arr[value];
  }
  return Obj;
}

function superTypeOf(params) {
  if (params instanceof Map) {
    return "Map";
  } else if (params instanceof Set) {
    return "Set";
  } else if (
    typeof params === "object" &&
    params !== null &&
    !Array.isArray(params)
  ) {
    return "Object";
  } else if (typeof params === "string") {
    return "String";
  } else if (typeof params === "number") {
    return "Number";
  } else if (Array.isArray(params)) {
    return "Array";
  } else if (typeof params === "undefined") {
    return "undefined";
  } else if (typeof params === "function") {
    return "Function";
  } else if (typeof params !== "undefined") {
    return "null";
  }
}