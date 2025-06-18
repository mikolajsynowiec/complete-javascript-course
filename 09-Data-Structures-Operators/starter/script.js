'use strict';

const weekDays = ['Mon', 'Tue', 'wed', 'Thu', 'fri', 'Sat', 'Sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}}
      }`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};
/////////////////////////////////////////////////
//Strings

const airline = 'Tap Air Portugal';
// const plane = 'A320';

console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());
//Fix capitalization in name
// const passegngerName = 'mIKO';
// const passegnerLower = passegngerName.toLocaleLowerCase();
// const passengerCorrect =
//   passegnerLower[0].toLocaleUpperCase() + passegnerLower.slice(1);
// console.log(passengerCorrect);

// const correctPassengerName = function (name) {
//   const lowerName = name.toLocaleLowerCase();
//   const correctName = lowerName[0].toLocaleUpperCase() + lowerName.slice(1);
//   console.log(correctName);
// };

// correctPassengerName('MiKoLAj');

// //Compare emails

// const email = 'hello@miko.com';
// const loginEmail = '  Hello@miko.com';

// const compareEmail = function (email) {
//   const lowerEmail = email.toLocaleLowerCase();
//   const trimmedEmal = lowerEmail.trim();
//   console.log(trimmedEmal);
// };

// compareEmail(email);

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim();
// console.log(normalizedEmail);

//replacing
const priceGB = '288,79!';
const priceUS = priceGB.replace('!', '$').replace(',', '.');
console.log(priceUS);

const annoncement = 'Chuj ci w dupe dupe';
console.log(annoncement.replaceAll('dupe', 'pizde'));

console.log(annoncement.replace(/dupe/g, 'cipe'));

//Boleans
// const plane = 'Airbus A320neo';
const plane = 'cipka Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus Family');
} else {
  console.log('Some old fucking plane');
}

//Practice exercise

const checkBaggage = function (items) {
  const newItems = items.toLocaleLowerCase();
  if (newItems.includes('knife') || newItems.includes('gun')) {
    console.log(
      'You are not allowed to get to that plane and getting deported'
    );
  } else {
    console.log('Have a good flight');
  }
};

checkBaggage('I have a laptop');
checkBaggage('I have a gun');
checkBaggage('i have a pocket Knife');

// console.log(plane[0]);

// console.log(airline.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   if (seat[2] === 'B' || seat[2] === 'E') {
//     console.log('Middle seat!');
//   } else if (seat[2] === 'A' || seat[2] === 'D') {
//     console.log('Exit seat');
//   } else if (seat[2] === 'C' || seat[2] === 'F') {
//     console.log('Window Seat!');
//   }
// };

// checkMiddleSeat('25A');
// checkMiddleSeat('44B');
// checkMiddleSeat('25C');
// checkMiddleSeat('25D');
// checkMiddleSeat('44E');
// checkMiddleSeat('25F');

// console.log(airline.indexOf('Portugal'));
//////////////////////////////////////////////////////
//Maps

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Milano');
// console.log(rest.set(2, 'krakow'));

// rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 24;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('Categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);
// // rest.clear(rest.size);
// console.log(rest);

// rest.set(document.querySelector('h1'), 'Heading');

// const arr = [1, 2];

// rest.set(arr, 'Test');
// console.log(rest.get(arr));

// Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz App

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JS'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'try again'],
// ]);

// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value} `);
// }
// const answer = Number(prompt('Your answer'));

// console.log(answer);

// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// //Convert map to array
// console.log([...question]);

// ///////////////////////////////////////
// //Sets

// const italianFood = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFood = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// const commonFood = italianFood.intersection(mexicanFood);
// // console.log(...commonFoods);
// // console.log([...commonFoods]);

// const italianMexicanFusion = italianFood.union(mexicanFood);
// // console.log(...italianMexicanFusion);

// const uniqueItalianFood = italianFood.difference(mexicanFood);
// // console.log(...uniqueItalianFood);

// const uniqueMexicanFood = mexicanFood.difference(italianFood);
// // console.log(...uniqueMexicanFood);

// const uniqueItalianAndMexicanFood =
//   italianFood.symmetricDifference(mexicanFood);
// // console.log(...uniqueItalianAndMexicanFood);

// console.log(italianFood.isDisjointFrom(mexicanFood));

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto']);

// console.log(ordersSet);

// console.log(new Set('Miko'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Pizzaa'));
// console.log(ordersSet.add('gowno'));
// ordersSet.delete('gowno');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// const staff = [
//   'Waiter',
//   'Chef',
//   'Waiter',
//   'Manager',
//   'Chef',
//   'Waiter',
//   'Manager',
// ];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

///////////////////////////////////////////////////
//Looping objects: Object Keys, Values and Entries

//Prpperty names
// const properties = Object.keys(openingHours);

// let openStr = `We are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day},`;
// }

// console.log(openStr);

// //property values
// const values = Object.values(openingHours);
// console.log(values);

// //Entire object
// const entries = Object.entries(openingHours);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////////////////
//Optional Chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours);

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ['Mon', 'Tue', 'wed', 'Thu', 'fri', 'Sat', 'Sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //Methods
// console.log(restaurant.cipa?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [{ name: 'Miko', email: 'chuj' }];

// console.log(users[1]?.name ?? 'Users array empty');

// ///////////////////////////////////////
// // Destructuring Arrays

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// ///////////////////////////////////////
// //Destructuring Objects

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(sat, weekDays);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// ///////////////////////////////////////
// //The Spread Operator

// // Arrays
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1]];
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// // Join arrays
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(wholeMenu);

// // Strings
// const str = 'miko';
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);

// ///////////////////////////////////////
// //Rest Pattern

// // Arrays
// const [x, y, ...restArr] = [1, 2, 3, 4, 5];
// console.log(x, y, restArr);

// // Objects
// const { sat: saturday, ...week } = restaurant.openingHours;
// console.log(saturday, week);

// Functions

// const add = function (...numbers) {
//   let sum = onabort;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('chicken', 'mashrooms', 'olives');

// restaurant.orderPizza('mashrooms');

/////////////////////////////////////////////////////////
// USe Any data type, return any data type, short-circuting

// console.log(3 || 'Miko');
// console.log('' || 'miko');
// console.log(true || 0);
// console.log(undefined || null);

//restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('mikolaj' && 'Miko' && null && 'chuj');

// if (restaurant.orderPizza) {
//   console.log(restaurant.orderPizza('mashrooms', 'chuj'));
// }

// restaurant.orderPasta && restaurant.orderPizza('mushrooms', 'dziwki');

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefiend (Not 0 or")
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

//////////////////////////////////////////////////
// Logical Assignments Operators

// const rest1 = {
//   name: 'capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'capri',
//   owner: 'Miko',
// };

// //OR Assigment Operator
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// //nullish assigment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest2.owner = rest2.owner && '<ANNONYMUS';
// // rest1.owner = rest1.owner && '<ANNONYMUS';

// rest1.owner ??= 'ANNONYMUS';
// rest2.owner &&= 'has owner';

// console.log(rest1, rest2);

///////////////////////////////////
//Looping Arrays: The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
