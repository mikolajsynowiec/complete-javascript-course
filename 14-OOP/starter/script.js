'use strict';
////////////////////////////
//Constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birtYear = birthYear;
};

const miko = new Person('Miko', 2002);

console.log(miko);
// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. {} function automatically return {}

const filip = new Person('filip', 2003);

const names = [miko, filip];
console.log(names);

//Prototypes

Person.prototype.calclAge = function () {
  console.log(2025 - this.birtYear);
};

miko.calclAge();

console.log(miko.__proto__);
