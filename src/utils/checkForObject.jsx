function checkForObject(Arr) {
    const reducedArr = Arr.reduce((prev, curr) => {
        if (prev) return true
        else if (typeof curr === 'object') return true
        else return false
    }, false)
    // console.log(reducedArr)
    return reducedArr
}

export default checkForObject