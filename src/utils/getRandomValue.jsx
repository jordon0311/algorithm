function getRandomValue(Array) {
    const randomIndex = Math.floor(Math.random() * Array.length)
    return Array[randomIndex]
}

export default getRandomValue