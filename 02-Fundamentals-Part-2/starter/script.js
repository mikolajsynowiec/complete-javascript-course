// function logger() {
//     console.log(`My name is Miko`);
// }


// //calling/running/invoking function
// logger();
// logger();


//function declaration
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }


// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


//function declaration
// function calcAge1(birthYear) {
//     return 2025 - birthYear;
// }
// const mikoAge1 = calcAge1(2002);
// console.log(mikoAge1);


// //function expression
// const calcAge2 = function (birtYear) {
//     return 2025 - birtYear;
// }
// const mikoAge2 = calcAge2(2002);
// console.log(mikoAge2);


// //Arrow function
// const calcAge3 = birthYear => 2025 - birthYear;
// const mikoAge3 = calcAge3(2002);
// console.log(mikoAge3);



// const yearsLeft = function (birtYear) {
//     const age = 2025 - birtYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// const miko = yearsLeft(2002);
// console.log(miko);



// const yearsLeft2 = (birthYear, firstName) => {
//     const age = 2025 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// const miko2 = yearsLeft2(2002, `Miko`);
// console.log(miko2);
// console.log(yearsLeft2(2003, `John`));

// function cutFruiPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruiPieces(apples);
//     const orangePieces = cutFruiPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }


// const calsAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const yearsLeft = function (birtYear, firstName) {
//     const age = calsAge(birtYear)
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} has ${retirement} years left.`);
//         return retirement;
//     } else {
//         console.log(`${firstName} doenn't haveto work anymore.`);
//         return -1;
//     }
// }


// const miko = yearsLeft(1950, `Miko`);
// const zena = yearsLeft(2001, `Zena`);

// const friends = ['Miko', 'John', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1992, 1993, 1994);
// console.log(friends[0]);

// console.log(friends.length);

// friends[2] = "chuj";
// console.log(friends);

// const jobs = ["swimmer", "programmer"]
// const firstName = 'Miko'
// const miko = [firstName, 'synowiec', '2025-2002', jobs];
// console.log(miko);



// const years = [1991, 1992, 1993, 1994];

// const calcAge2 = function (birtYear) {
//     return 2025 - birtYear;
// }

// const age1 = calcAge2(years[0]);
// console.log(age1);

// const age3 = calcAge2(years[years.length - 1]);
// console.log(age3);
// const ages = []

const friends = ['Miko', 'Jan', 'szymon', 'john'];

// console.log(friends);

//Add elements
// const newLength = friends.push('chuj');
// console.log(newLength);

// console.log(friends);

// const friends3 = friends.unshift("Peter");

// console.log(friends3);
// console.log(friends);

//remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);
// console.log(friends);
// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Jan"));

// console.log(friends.includes("Jan"));
// console.log(friends.includes("ggg"));

// if (friends.includes("szymon")) {
//     console.log("You have a friend name szymon");
// } else {
//     console.log("You dont have that friend");
// }

// const mikoArrays = [
//     'Miko',
//     'Syno',
//     2025 - 2002,
//     'programmer',
//     ['jan', 'john', 'szymon']
// ];

//object
//(properties + values)

// const miko = {
//     firstName: 'Miko',
//     lastName: 'Syno',
//     age: 2025 - 2002,
//     job: 'programmer',
//     friends: ['jan', 'john', 'szymon',]
// };

// console.log(miko);

// console.log(miko.lastName);
// console.log(miko['lastName']);

// const nameKey = "Name";

// console.log(miko['first' + nameKey]);
// console.log(miko['last' + nameKey]);

// const intrestedIn = prompt("What do you want to know about miko? choose between, firstName, lastName, age, job, friends");
// console.log(intrestedIn);

// console.log(miko[intrestedIn]);

// if (miko[intrestedIn]) {
//     console.log(miko[intrestedIn]);
// } else {
//     console.log(`Sorry, this object doesn't contain value name "${intrestedIn}"`);
// }

// miko.location = 'USA';
// miko['twitter'] = '@chuj';

// console.log(miko);

//"Miko has 3 friends and his best friend is called chuj"

// const miko = {
//     firstName: 'Miko',
//     lastName: 'Syno',
//     birthYear: 2002,
//     job: 'programmer',
//     friends: ['jan', 'john', 'szymon',],
//     hasDriversLicense: false,

//     calcAge: function () {
//         return 2025 - this.birthYear;
//     },

//     calcAgeTwo: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     describe: function () {
//         if (miko.hasDriversLicense) {
//             return `${miko.firstName} is a ${miko.calcAge()} old ${miko.job} and he has a driver's license`;
//         } else {
//             return `${miko.firstName} is a ${miko.calcAge()} old ${miko.job} and he doesn't have a driver's license`;
//         }
//     }

// };

// console.log(miko.describe());


// console.log(`${miko.firstName} has ${miko.friends.length} and his best friedn is called ${miko.friends[0]} and is ${miko.calcAge()} or he is ${miko.calcAgeTwo()} or he is ${miko.age}`);

//for loop keeps running while condition is True
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} `);
// };

// const miko = {
//     firstName: 'Miko',
//     lastName: 'Syno',
//     age: 2025 - 2002,
//     job: 'programmer',
//     friends: ['jan', 'john', 'szymon',]
// };




// for (let i = 0; i < mikoArray.length; i++) {
//     console.log(mikoArray[i], typeof mikoArray[i]);

//     types[i] = typeof mikoArray[i];
//     types.push(typeof mikoArray[i]);
// };

// console.log(types);

// const years = [2001, 2002, 2003, 2004];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2025 - years[i]);
// };

// console.log(ages);

//continue and break

// const types = [];

// const mikoArray = [
//     'Miko',
//     'Syno',
//     2025 - 2002,
//     'programmer',
//     ['jan', 'john', 'szymon']
// ];


// for (let i = 0; i < mikoArray.length; i++) {
//     if (typeof mikoArray[i] !== 'string') continue;

//     console.log(mikoArray[i], typeof mikoArray[i]);
// };

// for (let i = 0; i < mikoArray.length; i++) {
//     if (typeof mikoArray[i] === 'number') break;

//     console.log(mikoArray[i], typeof mikoArray[i]);
// };

// const types = [];

// const mikoArray = [
//     'Miko',
//     'Syno',
//     2025 - 2002,
//     'programmer',
//     ['jan', 'john', 'szymon']
// ];

// for (let i = mikoArray.length - 1; i >= 0; i--) {
//     console.log(mikoArray[i]);
// };

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`);
//     }
// };


let dice = Math.trunc(Math.random() * 6) + 1;


while (dice !== 6) {
    console.log(`Your rolled${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
};
