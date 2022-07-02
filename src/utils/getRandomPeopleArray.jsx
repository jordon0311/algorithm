import getRandomValue from "./getRandomValue"


const firstNames = [`Greta`, `Ashlyn`, `Dominique`, `Yasmine`, `Winston`, `Scarlet`, `Alan`, `Cade`, `Alyssa`,
    `Karli`, `Jair`, `Jeremy`, `Frida`, `John`, `Krish`, `Siena`, `Kendal`, `Samantha`, `Connor`, `Roy`,
    `Riley`, `Lukas`, `Shayla`, `Roderick`, `Roger`, `Rodolfo`, `Kaylen`, `Maxim`, `Alma`, `Daisy`,
    `Jon`, `Tatum`, `Giovani`, `Izabella`, `Phoebe`, `Will`, `Adison`, `Lia`, `Zayne`, `Mariela`,
    `Natalia`, `Karen`, `Matteo`, `Anabel`, `Karissa`, `Titus`, `Tyson`, `Miriam`, `Aydin`, `Aileen`,
    `Isla`, `Urijah`, `Lailah`, `Rose`, `Raul`, `Abby`, `Derick`, `Yazmin`, `Logan`, `Josue`, `Estrella`,
    `Ava`, `Bradley`, `Aarav`, `Angela`, `Luciano`, `Haleigh`, `Olivia`, `Journey`, `Bailee`, `Carlie`,
    `Jan`, `Jaelyn`, `Adelyn`, `Trenton`, `Vance`, `Azaria`, `Kaylie`, `Annie`, `Amir`, `Jameson`,
    `Gael`, `Keyla`, `Malcolm`, `Gavyn`, `Jade`, `Braylen`, `Gerald`, `Rosa`, `Kaylin`, `Zavier`,
    `Savion`, `Karsyn`, `Jayden`, `Thalia`, `Hunter`, `Lilah`, `Raelynn`, `Kenley`, `Paityn`,
    `Trystan`, `Karina`, `Kylie`, `Valentin`, `Arthur`, `Vanessa`, `Laurel`, `Isiah`, `Yadiel`, `Issac`,
    `Marlene`, `Jordin`, `Miley`, `Lawrence`, `Erick`, `Lizeth`, `Nigel`, `Jayla`, `Andrea`, `Zaria`,
    `William`, `Mattie`, `German`, `Giovanni`, `Anne`, `Reese`, `Jessica`, `Elisha`, `Jaliyah`,
    `Collin`, `Alexandra`, `Bailey`, `Aniyah`, `Emily`, `Jaslyn`, `Timothy`, `Jaiden`, `Aiyana`,
    `Howard`, `Leonel`, `Walker`, `Taliyah`, `Darryl`, `Camilla`, `Joe`, `Max`, `Tyrell`, `Corbin`,
    `Davis`, `Iris`, `Dillan`, `Dakota`, `Ross`, `Dominique`, `Hazel`, `Jaydon`, `Jacqueline`, `Khalil`,
    `Andres`, `Alexzander`, `Kaylee`, `Kendra`, `Elisa`, `Ray`, `Sidney`, `Aaden`, `Dwayne`,
    `Reynaldo`, `Adrien`, `Eve`, `Fisher`, `Mylee`, `Peyton`, `Casey`, `Cole`, `Magdalena`,
    `Ernesto`, `Kara`, `Monica`, `Deanna`, `Marlon`, `Alexia`, `Sara`, `Kyla`, `Karla`, `Brooks`,
    `Aleena`, `Ivan`, `Kyson`, `Deangelo`, `Faith`, `Taylor`, `Kasen`, `Amani`, `Preston`,
    `Josephine`, `Frank`, `Drake`, `Kason`, `Kiersten`]

const lastNames = [`Stout`, `Morgan`, `Contreras`, `Nichols`, `Hensley`, `Morales`, `Joyce`, `Ayala`,
    `Martinez`, `Farley`, `Ferrell`, `Horton`, `Buchanan`, `Randolph`, `Foster`, `Warner`,
    `Mullins`, `Fritz`, `Kane`, `Cantu`, `Mclean`, `Boyle`, `Li`, `Tanner`, `Salas`, `Woodard`,
    `Ward`, `Becker`, `Paul`, `Howell`, `Richardson`, `Mccormick`, `Mccullough`, `Graham`,
    `Hardin`, `Bridges`, `Crane`, `Carpenter`, `Love`, `Campos`, `Winters`, `Mccoy`, `Lamb`,
    `Salinas`, `Pineda`, `Montoya`, `Curtis`, `Herrera`, `Dominguez`, `Cruz`,]

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const years = Array(100).fill(1920).map((value, index) => (value + index))

const cities = [`Montgomery`, `Helena Juneau`, `Lincoln`, `Phoenix`, `Carson City`, `Little Rock`, `Concord`,
    `Sacramento`, `Trenton`, `Denver`, `Santa Fe`, `Hartford`, `Albany`, `Dover`, `Raleigh`,
    `Tallahassee`, `Bismarck`, `Atlanta`, `Columbus`, `Honolulu`, `Oklahoma City`, `Boise`,
    `Salem`, `Springfield`, `Harrisburg`, `Indianapolis`, `Providence`, `Des Moines`, `Columbia`,
    `Topeka`, `Pierre`, `Frankfort`, `Nashville`, `Baton Rouge`, `Austin`, `Augusta`, `Salt Lake City`,
    `Annapolis`, `Montpelier`, `Boston`, `Richmond`, `Lansing`, `Olympia`, `St. Paul`,
    `Charleston`, `Jackson`, `Madison`, `Jefferson City`, `Cheyenne`,]

const heights = [66.79, 66.78, 64.46, 64.76, 67.07, 64.21, 68.35, 63.97, 67.03, 64.36, 69.79, 72.15, 71.6, 63.85,
    71.39, 69.02, 61.16, 66.1, 63.34, 64.04, 62.87, 66.91, 67.32, 68.61, 67.51, 67.06, 67.5, 64.98,
    64.34, 69.2, 66.04, 65.06, 64.07, 69.4, 69.07, 65.2, 63.54, 73.81, 70.53, 66.37, 66.97, 66.97,
    67.82, 67.93, 66.26, 70.6, 67.94, 67.64, 71.36, 68.46, 71.38, 63.37, 71.08, 65.81, 66.57, 68.12,
    71.66, 64.39, 63.63, 65.14, 66.82, 66.12, 68.07, 65.08, 68.02, 68.19, 70.89, 62.38, 63.03, 65.3,
    69.36, 69.63, 71.96, 66.91, 67.82, 70.95, 69.55, 66.37, 68.76, 67.21, 64.31, 70.51, 69.51, 69.5,
    69.44, 61.6, 70.16, 71.29, 69.7, 71.45, 66.21, 69.42, 65.19, 67.27, 69.52, 65.16, 66.94, 63.49,
    64.3, 66.67, 63.7, 66.59, 68.42, 68.07, 69.9, 72.82, 73.07, 67.84, 66.51, 67.35, 72.26, 67.73,
    69.53, 68.83, 71.73, 66.71, 65.16, 68.2, 72.92, 67.4, 69.63, 67.15, 69.42, 69.12, 68.45, 69.29,
    73.7, 66.7, 71.57, 65.15, 69.28, 68.13, 68.12, 68.82, 68.47, 68.21, 69.41, 67.09, 67.76, 70.16,
    68.46, 70.58, 67.85, 67.49, 64.47, 72.66, 69.23, 68.68, 63.32, 68.08, 68.59, 70.22, 73.19, 69.75,
    72.9, 67.39, 69.27, 64.51, 71.5, 70.56, 66.64, 72.8, 66.99, 68.26, 70.55, 69.21, 69.88, 70.34,
    69.46, 66.08, 71.95, 71.28, 67.89, 69.5, 67.24, 69.59, 69.24, 67.22, 68.84, 69.27, 67.78, 69.13,
    66.79, 72.99, 67.85, 66.15, 69.39, 71.29, 71.43, 73.29, 69.35, 69.43, 67.91, 70.26, 67.83, 68.7,
    68.92, 67.73, 68.08, 70.93]

function getRandomPerson(currentYear) {
    const dateOfBirth = {
        day: getRandomValue(days),
        month: getRandomValue(months),
        year: getRandomValue(years),
    }
    const newPerson = {
        firstName: getRandomValue(firstNames),
        lastName: getRandomValue(lastNames),
        birthDate: dateOfBirth,
        age: currentYear - dateOfBirth.year,
        city: getRandomValue(cities),
        inchesTall: getRandomValue(heights)
    }
    return newPerson
}


function getRandomPeopleArray(length, currentYear) {
    const peopleArray = Array(length).fill({}).map(() => (
        getRandomPerson(currentYear)
    ))
    return peopleArray
}

export default getRandomPeopleArray