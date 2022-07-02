import { atom } from "jotai";
import getCurrentDate from "../utils/getCurrentDate";
import getRandomNumberArray from "../utils/getRandomNumberArray";
import getRandomPeopleArray from "../utils/getRandomPeopleArray";
import getRandomStringArray from "../utils/getRandomStringArray";

const randomNumberArray = getRandomNumberArray(0, 6548, 10)

const randomNumberArrayTwo = getRandomNumberArray(-3000, 3000, 20)

const randomStringArray = getRandomStringArray(10)

const randomStringArrayTwo = getRandomStringArray(20)

const currentDate = getCurrentDate()

const peopleArray = getRandomPeopleArray(10, currentDate.year)

const peopleArrayTwo = getRandomPeopleArray(10, currentDate.year)



const dataSetAtom = atom({
    'Random Number Array': randomNumberArray,
    'Random String Array': randomStringArray,
    'Random Object Array': peopleArray,
    'Random Number Array Two': randomNumberArrayTwo,
    'Random String Array Two': randomStringArrayTwo,
    'Random Object Array Two': peopleArrayTwo,
})

const searchAtom = atom(' ')

const scrollAtom = atom([16, -16])

const animationAtom = atom([true, false])

export { dataSetAtom, searchAtom, scrollAtom, animationAtom}