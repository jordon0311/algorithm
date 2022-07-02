function getCurrentDate() {
    const newDate = new Date()
    const currentDate = {
        day: newDate.getDate(),
        month: newDate.getMonth() + 1,
        year: newDate.getFullYear(),
    }
    return currentDate
}

export default getCurrentDate