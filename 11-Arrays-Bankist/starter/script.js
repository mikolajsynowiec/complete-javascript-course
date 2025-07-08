'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

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

// //Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(value, key);
// });

// //Set

// const currenciesUnique = new Set([
//   'USD',
//   'CAD',
//   'PLN',
//   'KOR',
//   'EUR',
//   'GBP',
//   'CAD',
//   'EUR',
// ]);
// // console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   // console.log(value, map);
// });

///////////////////////////////////////////
//The Map Method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const euroToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);

//Arrow function

// const movementUSDarrow = movements.map(mov => mov * euroToUsd);

// console.log(movementUSDarrow);

// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'}  ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescriptions);

// const multiplyTwoNumbers = function (x, y) {
//   return x * y;
// };

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// numbers.forEach((mov, i) => {
//   mov === 1 ? console.log('one') : console.log('cipa');
// });

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLocaleLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };

// createUsernames(accounts);
// console.log(accounts);

// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrwalas = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrwalas);

// const withdrawalsFor = [];
// for (const mov of movements) if (mov < 0) withdrawalsFor.push(mov);
// console.log(withdrawalsFor);

// const withdrewArrow = movements.filter(mov => mov < 0);
// console.log(withdrewArrow);
//reduce method

// console.log(movements);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// });

// console.log(balance);

// const balanceAdrrow = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balanceAdrrow);

// const euroToUsd = 1.1;
// const totalDepositInUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositInUSD);

// const fisrstWithdrawal = movements.find(mov => mov < 0);
// console.log(fisrstWithdrawal);

// console.log(accounts);

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// const lastWithdrawal = movements.findLast(mov => mov < 0);
// console.log(lastWithdrawal);

// const lastWithdrawalIndex = movements.findLastIndex(
//   mov => Math.abs(mov) > 2000
// );
// console.log(lastWithdrawalIndex);

// console.log(movements.includes(-130));

// const anyDeposits = movements.some(mov => mov > 50000);
// console.log(anyDeposits);

const everyDeposit = movements.every(mov => mov > 0);
console.log(everyDeposit);

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance);

const overalBalance2 = accounts
  .flatMap(acc => acc.movements)

  .reduce((acc, mov) => acc + mov, 0);

console.log(overalBalance2);
