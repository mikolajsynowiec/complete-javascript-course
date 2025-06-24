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

const flight = 'A12';
const miko = {
  name: 'Miko syn',
  passport: 123456789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'A123';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456789) {
    alert('check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, miko);
console.log(flight);
console.log(miko);
