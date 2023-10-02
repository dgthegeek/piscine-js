invert = (obj) =>{
    let result = {}
    const key = Object.keys(obj)
    key.forEach((key) => {
    result[obj[key]] = key
  })
  return result
} 
console.log(invert({ language: 'english' }));