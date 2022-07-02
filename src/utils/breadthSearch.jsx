// LEFT OFF HERE!!

function breadthSearch(obj, x = '', depth = 0) {
    const valueArray = Object.values(obj)

    return (
        valueArray.reduce((prev, curr, index) => {
            if (prev.toString() !== 'No result') {
                return prev
            } else if (curr === x) {
                return [index, curr]
            } else if (index === valueArray.length - 1) {
                const newArray = []
                valueArray.forEach(value => {
                    newArray.push(value)
                })
            }
    }, ['No result'])
    )
}

export default breadthSearch