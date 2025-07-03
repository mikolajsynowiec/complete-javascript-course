'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//Simply Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// //Slice Method

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// console.log([...arr]);

//SPLICE Method

// console.log(arr.splice(2));
// console.log(arr);

// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // // REVERSE Method
// // arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'b'];
// // console.log(arr2.reverse());
// // console.log(arr2);

// // CONCAT Metod
// const letters = arr.concat(arr2);
// console.log(letters);

// //JOIN Metod
// console.log(letters.join('cipa'));

// New At Method

// const arr = [23, 24, 25];
// console.log(arr[0]);
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);

// console.log(arr.at(-1));
// console.log(arr.at());

//for each

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// const array = [1, 2, 3, 4, 5, 6, 7];

// array.forEach(function (mov, i, arr) {
//   console.log(`Number nr. ${i}:  ${mov} in ${arr}`);
// });

//Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(value, key);
});

//Set

const currenciesUnique = new Set([
  'USD',
  'CAD',
  'PLN',
  'KOR',
  'EUR',
  'GBP',
  'CAD',
  'EUR',
]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(value, map);
});
