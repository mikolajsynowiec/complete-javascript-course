'use strict';
////////////////////////////
//Constructor functions

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

// miko.calcAge();

// miko.greet();

// const account = {
//   owner: 'miko',
//   movements: [200, 300, 400, 500],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

// const walter = new PersonCl('walt', 1111);

// const miko = new PersonCl('miko syn', 2002);
// // console.log(miko);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.hey = function () {
//   console.log('Hey there');
// };

// Person.hey();

// PersonCl.hey();

// const PersonProto = {
//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// console.log(steven);

// Person.prototype.hello = function () {
//   console.log(`Hello ${this.firstName}, you were born in ${this.birthYear}`);
// };

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2025 - this.birthYear);
// };
// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('mike', '2002', 'CS');
// console.log(mike);

// mike.introduce();

// mike.calcAge();

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2025 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log('hey there');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduces() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   retirementYear() {
//     console.log(`You will retired in ${this.birthYear + 65}`);
//   }
// }

// // const janek = new StudentCl('janek K', 2002);
// const janek = new StudentCl('janek K', 2002, 'PE');
// console.log(janek);

// janek.introduces();
// janek.retirementYear();

// const PersonProto = {
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },

//   calcAge() {
//     console.log(2025 - this.birthYear);
//   },
// };

// const miko = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduces = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const jan = Object.create(StudentProto);
// jan.init('jan', 2002, 'PE');
// console.log(jan);

// jan.calcAge();
// jan.introduces();

// 1) Public Fields
// 2) Private Fields
// 3) Public Metods
// 4) Private Metods
// 5) STATIC version of these4

class Account {
  locale = navigator.language;
  bank = 'bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for oppening an account, ${owner}`);
  }

  //Public Methods

  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  #apprpveLoan(val) {
    return true;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this.#apprpveLoan(val)) {
      this.deposit(val);
      console.log(`Loan Approved`);
    }
    return this;
  }
}
const acc1 = new Account('Miko', 'USD', 1234);

acc1.deposit(300).withdraw(100).withdraw(50).requestLoan(2500).withdraw(400);
console.log(acc1);
