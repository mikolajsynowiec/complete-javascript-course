'use strict';
///////////////////////////////////////
//Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 100 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('A12', 6);

//////////////////////////////////////
//Passing Aguments: vlau vs reference

// const flight = 'A12';
// const miko = {
//   name: 'Miko syn',
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'A123';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert('check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// checkIn(flight, miko);
// console.log(flight);
// console.log(miko);

// //////////////////////////////////////
// //First-Class and Higher-Order Functions
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higer order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`);
// };
// transformer('JavaScript is the best!', upperFirstWord);

// const changToCapital = function (str) {
//   const capitalWord = str.toUpperCase();
//   return capitalWord;
// };

// const transformer2 = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`transformed string: ${fn(str)}`);
//   console.log(`transformed by ${fn.name}`);
// };

// transformer2('MikolajSynowiec', changToCapital);
// transformer('Mikolaj Synowiec', oneWord);

// //Js uses callbacks all the time
// const high5 = function () {
//   console.log('piatka');
// };
// document.body.addEventListener('click', high5);

// ['miko', 'chuj', 'cipa'].forEach(high5);

// //functions returning functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// // const greeterHey = greet('czesc chuju');

// // greeterHey('Miko');

// // greet('siema')('Miko');

// //Arrow functions

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);
// greetArr('czesc')('cipko');
/////////////////////////////////////
//Call and Applay method

const book = function (flightNum, name) {
  this.bookings.push({ flight: `${this.iataCode}${flightNum}, name` });
  console.log(
    `${name} booked a seat on ${this.airlane} flight ${this.iataCode}${flightNum}`
  );
};

const AirSynek = {
  airlane: 'AirSynek',
  iataCode: 'AS',
  bookings: [],
  // book,
};

const AirMiko = {
  airlane: 'AirMiko',
  iataCode: 'AM',
  bookings: [],
  // book,
};

// AirSynek.book(234, 'Miko synow');
// AirSynek.book(123, 'chuj chuj');
// AirMiko.book(456, 'miko john');
// AirMiko.book(1233, 'george george');

// console.log(AirSynek.bookings);
// console.log(AirMiko.bookings);

book.call(AirMiko, 23, 'Mikolaj Synowiec');
console.log(AirMiko);

//Applay method

const flightData = [584, 'Miko syn'];

// book.apply(AirMiko, flightData);
// console.log(AirMiko);

book.call(AirMiko, ...flightData);
console.log(AirMiko);
////////////////////
//Bind Method

const bookAS = book.bind(AirMiko);
const bookAM = book.bind(AirMiko);

const bookAS23 = book.bind(AirMiko, 23);

bookAS23('Miko cipa');
