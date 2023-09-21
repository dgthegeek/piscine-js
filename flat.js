function flat(array) {
    let result = []

    function recflat(array) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                if (array[i].length === 1) {
                    result.push(array[i])

                } else {

                    recflat(array[i])
                }
            } else {
                result.push(array[i])
            }
        }
    }

    recflat(array)
    return result
}

console.log(flat([1, [2, [3]]]))