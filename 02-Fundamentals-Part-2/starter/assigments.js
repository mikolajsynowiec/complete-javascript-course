// function describeCountry(country, population, capitalCity) {
//     const description = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return description;
// }

// const finlandDescription = describeCountry('Finaldn', 6, `Helsinki`);
// console.log(finlandDescription);

// const polandDescription = describeCountry('Poland', 38, `Warsaw`);
// console.log(polandDescription);

// const usaDescription = describeCountry('USA', 340, `DC`);
// console.log(usaDescription);

// function percentageOfWorld1(population, country) {
//     const percentageOfTheWorld = ((population / 7900) * 100);
//     return `${country} has ${population} population, so it's about ${percentageOfTheWorld} % of the world population`;
// }

// const china1 = percentageOfWorld1(1400, 'China');
// const poland1 = percentageOfWorld1(35, 'Poland');
// const ukraine1 = percentageOfWorld1(50, 'Ukraine');




// console.log(china1);
// console.log(poland1);
// console.log(ukraine1);

// const percentageOfWorld2 = (population, country) => {
//     const percentageOfTheWorld = ((population / 7900) * 100);
//     return `${country} has ${population} population, so it's about ${percentageOfTheWorld} % of the world population`;
// }

// const china2 = percentageOfWorld2(1400, 'China');
// const poland2 = percentageOfWorld2(35, 'Poland');
// const ukraine2 = percentageOfWorld2(50, 'Ukraine');

// console.log(china2);
// console.log(poland2);
// console.log(ukraine2);

// const percentageOdWorld1 = function (population) {
//     return ((population / 7900) * 100);
// }

// china1 = percentageOdWorld1(1400);
// console.log(china1);

// const describePopulation = function (country, population) {
//     const percentageOdWorld = percentageOdWorld1(population);
//     return `${country}, has ${population} million people, which is about ${percentageOdWorld}% of the world.`;
// }

// console.log(describePopulation(`China`, 1440));

/* Write your code below. Good luck! 🙂 */

/* Write your code below. Good luck! 🙂 */

// const calcAverage = function (scoreOne, scoreTwo, scoreThree) {
//     const averageScore = Math.round((scoreOne + scoreTwo + scoreThree) / 3);
//     return averageScore;
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = function (teamOne, teamOneScore, teamTwo, teamTwoScore) {
//     if (teamOneScore >= 2 * teamTwoScore) {
//         console.log(`${teamOne} win (${teamOneScore} vs. ${teamTwoScore})`);
//     } else if (teamTwoScore <= 2 * teamOneScore) {
//         console.log(`${teamTwo} win (${teamTwoScore} vs. ${teamOneScore})`);
//     } else {
//         console.log('No team wins...');
//     }
// }

// const finalResult = checkWinner(`Koalas`, scoreKoalas, `Dolphins`, scoreDolphins);

// const finalResult2 = checkWinner(`Koalas`, scoreKoalas2, `Dolphins`, scoreDolphins2);

// const chinaPop = 1440;
// const polandPop = 35;
// const ukrainePop = 50;
// const francePop = 65;

// const populations = [chinaPop, polandPop, ukrainePop, francePop];

// // console.log(populations.length === 4);

// const percentageOdWorld1 = function (population) {
//     return ((population / 7900) * 100);
// }


// const percentages = [percentageOdWorld1(populations[0]), percentageOdWorld1(populations[1]), percentageOdWorld1(populations[2]), percentageOdWorld1(populations[3])];
// console.log(percentages);

/* Write your code below. Good luck! 🙂 */


// function calcTip(bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.20;
//     }
// }

// const tipOne = calcTip(125);
// const tipTwo = calcTip(555);
// const tipThree = calcTip(44);

// console.log(tipOne, tipTwo, tipThree);

// const neighbourCountries = [
//     'Germany',
//     'Czech',
//     'Slovakia',
//     'Ukraine',
//     'Belarus',
//     'Russia',
//     'Lituania',
// ]

// const newCountry = neighbourCountries.push('Utopia');
// const deleteCountry = neighbourCountries.pop();

// console.log(neighbourCountries);

// const includeGermany = neighbourCountries.includes('Germany');

// if (includeGermany === true) {
//     console.log('Probably a central european country.');
// } else {
//     console.log("Probably not a central european country.");
// };

// console.log(neighbourCountries.indexOf('Germany'));

// neighbourCountries[0] = "Germany.2";

// console.log(neighbourCountries);


// const neighbourCountries = [
//     'Germany',
//     'Czech',
//     'Slovakia',
//     'Ukraine',
//     'Belarus',
//     'Russia',
//     'Lituania',
// ]

// const myCountry = {
//     country: 'Poland',
//     capital: "Warsaw",
//     language: "Polish",
//     population: 36,
//     neighbours: neighbourCountries,
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbours and the capital is called ${this.capital}.`
//     },
//     checkIsIsland: function () {
//         if (this.neighbours.length > 0 === true) {
//             return `${this.country} is not an island`;
//         } else {
//             return `${this.country} is an island`;
//         }
//     }
// };

// console.log(myCountry.describe());
// console.log(myCountry.checkIsIsland());

// for (let vote = 1; vote <= 50; vote++) {
//     console.log(`Voter number ${vote} is currently voting`);
// };


// const chinaPop = 1440;
// const polandPop = 35;
// const ukrainePop = 50;
// const francePop = 65;

// const populations = [chinaPop, polandPop, ukrainePop, francePop];


// const percentageOdWorld1 = function (population) {
//     return ((population / 7900) * 100);
// }


// const percentages = [percentageOdWorld1(populations[0]), percentageOdWorld1(populations[1]), percentageOdWorld1(populations[2]), percentageOdWorld1(populations[3])];
// console.log(percentages);

// const precentage2 = [];

// for (let i = 0; i <= populations.length; i++) {
//     // const perc = percentageOdWorld1(populations[i]);
//     // precentage2.push(perc);

//     precentage2.push(percentageOdWorld1(populations[i]));


// };

// console.log(precentage2);

// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++)
//     for (let y = 0; y < listOfNeighbours[i].length; y++) {
//         console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//     }


const chinaPop = 1440;
const polandPop = 35;
const ukrainePop = 50;
const francePop = 65;

const populations = [chinaPop, polandPop, ukrainePop, francePop];


const percentageOdWorld1 = function (population) {
    return ((population / 7900) * 100);
}


const percentages3 = [];

let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOdWorld1(populations[i]));
    i++;
}

console.log(percentages3);