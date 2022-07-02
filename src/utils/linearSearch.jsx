
function linearSearch(Arr, x = '', n = 0) {
    const valueArray = Object.values(Arr)
    
    if (typeof valueArray[n] === 'object') {
        if (linearSearch(valueArray[n], x).length === 1) {
            return linearSearch(Arr, x, n + 1)
        } else return [n, linearSearch(valueArray[n], x)]
    } else if (typeof valueArray[n] === 'string') {
        if (valueArray[n].toLowerCase() === x.toLowerCase()) {
            return [n, valueArray[n]]
        } else return linearSearch(Arr, x, n + 1)
    } else if (typeof valueArray[n] === 'number') {
        if (valueArray[n] == x) {
            return [n, x]
        } else return linearSearch(Arr, x, n + 1)
    } else return ['No Result']
    
    // const searchKey = Object.keys(Arr)[n]
    // if (typeof Arr[searchKey] === 'object') {
    //     if (linearSearch(Arr[searchKey], x).length === 1) {
    //         return linearSearch(Arr, x, n + 1)
    //     } else return [searchKey, linearSearch(Arr[searchKey], x)]
    // } else if (typeof Arr[searchKey] === 'string') {
    //     if (Arr[searchKey].toLowerCase() === x.toLowerCase()) {
    //         return [searchKey, Arr[searchKey]]
    //     } else return linearSearch(Arr, x, n + 1)
    // } else if (typeof Arr[searchKey] === 'number') {
    //     if (Arr[searchKey] === parseInt(x)) {
    //         return [searchKey, Arr[searchKey]]
    //     } else return linearSearch(Arr, x, n + 1)
    // } else return ['No Result']
}
//This linear search was accomplished using a recursive function
//Large dataset will cause a crash due to runnning out of memory

export default linearSearch