'use strict';
///////////////////////////////////////
//Default Parameters

const bookings = [];

// //Es5
// const createBooking = function (flightNum, numPassengers, price) {
//   numPassengers = numPassengers || 1;
//   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 200 * numPassengers
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };

//   console.log(booking);
//   bookings.push(booking);
// };

// // createBooking('A12', undefined, 22);

// ////////////////////////////////////
// //Passing Arguments to functions

// const flight = 'A12';
// const miko = {
//   name: 'Mikolaj Synowiec',
//   passport: 123456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'A33';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 123456789) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport');
//   }
// };

// const newPassport = function (person) {
//   person.passport = +1;
// };
// newPassport(miko);
// checkIn(flight, miko);

/////////////////////////////
// //Hiher order functions

// const oneWord = function (str) {
//   const newStr = str.replace(/ /g, '').toLowerCase();
//   return newStr;
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// console.log(upperFirstWord('Java script sucks!'));

// const transformer = function (str, fn) {
//   console.log(`Original string" ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
// };

// transformer('Java script sucks!', upperFirstWord);
// transformer('Cipa Chuj', oneWord);

// const high5 = function () {
//   console.log('Piona chuju');
// };

// document.body.addEventListener('click', high5);

// // ['Miko', 'Jan', 'Adam'].forEach(high5);

// const planeTicket = [];

// const mikosPlaneTicket = function (
//   firstName = 'miko',
//   lastName = 'syn',
//   ticketNumber = 'A12'
// ) {
//   const mikosTicket = {
//     firstName,
//     lastName,
//     ticketNumber,
//   };
//   planeTicket.push(mikosTicket);
//   console.log(planeTicket);
// };

// document.body.addEventListener('click', mikosPlaneTicket);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey');

// greeterHey('Miko');
// greeterHey('Steven');

// greet('Hello')('Miko');

// const fillCup = function (liquid) {
//   console.log(`Cup filled with ${liquid}`);
//   return function (toOrder) {
//     console.log(`There is no more ${liquid}, ${toOrder} was order`);
//   };
// };

// fillCup('tea')('coffe');

const mikoAir = {
  airline: 'MikoAir',
  iataCode: 'MA',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

mikoAir.book(123, 'Mikolaj Synowiec');

const synekAir = {
  airline: 'synekAir',
  iataCode: 'SA',
  bookings: [],
};

const book = mikoAir.book;

book.call(synekAir, 23, 'Mikolaj synowiec');

//Bind Method
const bookSA = book.bind(synekAir);
const bookMA = book.bind(mikoAir);

bookSA(23, 'Mikolaj s');

const bookSA23 = book.bind(synekAir, 23);

bookSA23('Mikolaj Synowiec');

mikoAir.planes = 300;
mikoAir.buyPlane = function () {
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', mikoAir.buyPlane.bind(mikoAir));

//Partial application

// const addtax = (rate, value) => value + value * rate;
// console.log(addtax(0.1, 200));

// const addVAT = addtax.bind(null, 0.23);

// console.log(addVAT(1000));

const addTax = function (rate, value) {
  const afterRate = value + value * rate;

  return function (vat = value * 0.23) {
    const afterVAT = afterRate + vat;
    console.log(`After VAT: ${afterVAT}`);
    return afterVAT;
  };
};

addTax(0.1, 200)(100);
