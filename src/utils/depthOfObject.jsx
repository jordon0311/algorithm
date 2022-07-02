function depthOfObject(Obj, n=1) {
    const depth = Object.values(Obj).reduce((prev, curr) => {
        if(typeof curr === 'object'){
            return depthOfObject(curr, n+1)
        } else return prev
    }, n)
    return depth
}

export default depthOfObject