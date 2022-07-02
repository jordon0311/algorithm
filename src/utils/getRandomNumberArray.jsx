function getRandomNumberArray(minVal, maxVal, length) {
    const array = Array(length).fill(0).map(() => (
        Math.floor(minVal + Math.random() * (maxVal-minVal)).toString()
    ))

    return array
}
export default getRandomNumberArray