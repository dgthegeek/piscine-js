async function all(objects = {}) {
    var result = {};
    if (Object.keys(objects).length === 0) return {};
    for (let key in objects) {
      result[key] = await objects[key];
    }
  
    return result;
  }