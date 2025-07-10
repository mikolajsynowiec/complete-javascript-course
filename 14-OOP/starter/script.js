'use strict';
////////////////////////////
//Constructor functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const miko = new Person('Miko', 2002);

// // console.log(miko);
// // 1. new {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. {} function automatically return {}

// const filip = new Person('filip', 2003);

// // const names = [miko, filip];
// // console.log(names);

// //Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };

// Person.prototype.hello = function () {
//   console.log(`Hello ${this.firstName}, you were born in ${this.birthYear}`);
// };

// miko.calcAge();
// miko.hello();

// Person.prototype.species = 'Homo Sapiens';
// console.log(miko.species);

// console.log(miko.__proto__.__proto__);

// const arr = [1, 1, 2, 2, 3, 3, 4, 45, 55, 55];

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }
// }

// const miko = new PersonCl('miko', 2002);
// console.log(miko);

// miko.calcAge();

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

// miko.greet();

const account = {
  owner: 'miko',
  movements: [200, 300, 400, 500],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
