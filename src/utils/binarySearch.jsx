import checkForObject from "./checkForObject"

function binarySearch(arr = [], x = '', l = 0, u = arr.length - 1) {
    arr.sort()
    if (checkForObject(arr)) {
        return ['Data set can not contain objects']
    } else {
        if (x > arr[u]) return ['No result']
        if (x < arr[l]) return ['No result']
        const mid = l + Math.floor((u - l) / 2)
        if (x === arr[mid]) {
            return [mid, arr[mid]]
        } else if (x > arr[mid]) {
            return binarySearch(arr, x, mid + 1, u)
        } else {
            return binarySearch(arr, x, l, mid - 1)
        }
    }
}

export default binarySearch