function flat(array) {
    let result = []

    function recflat(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])){
                recflat(array[i])
            }else{
                result.push(array[i])                
            }
        }
    }
   
    recflat(array)
    return result
}

console.log(flat([1,2,3,[4,5,[6]]]))