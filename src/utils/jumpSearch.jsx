import checkForObject from "./checkForObject"

function jumpSearch(arr = [], x = '', n = arr.length) {
    arr.sort()
    if (checkForObject(arr)) {
        return ['Data set cannot contain objects']
    } else {
        let step = Math.floor(Math.sqrt(n))
        let prev = 0
        if(arr[0] > x) return ['No blocks contain the result']
        //This finds the block containing the result
        while (arr[Math.min(step, n) - 1] < x) {
            prev = step
            step += Math.floor(Math.sqrt(n))
            if (prev >= n) return ['No blocks contain the result']
        }
        //This is a linear search within the block
        while (arr[prev] < x) {
            prev++
            if (prev === Math.min(step, n)) {
                return ['No result in expected block']
            }
        }
        //If the result is found
        // eslint-disable-next-line eqeqeq
        if (arr[prev] == x) {
            return [prev, arr[prev]]
        } else return ['No result']
    }
}

export default jumpSearch