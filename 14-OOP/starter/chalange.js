/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/
console.log('-----------Chalange #1!------------');

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   newSpeed = this.speed + 10;
//   console.log(newSpeed);
// };

// Car.prototype.break = function () {
//   slower = this.speed - 5;
//   console.log(slower);
// };

// const bmw = new Car(2005, 230);
// const audi = new Car(2002, 145);

// console.log(bmw);
// console.log(audi);

// bmw.accelerate();
// audi.accelerate();

// bmw.break();
// audi.break();
console.log('-----------Chalange #2!------------');

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log(this.speed + 10);
  }

  break() {
    console.log(this.speed - 5);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const experiment = new CarCl('ford', 120);
// console.log(experiment);

// experiment.accelerate();
// experiment.break();
// experiment.speedUS = 50;
// console.log(experiment);

console.log('-----------Chalange #3!------------');

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  newSpeed = this.speed + 10;
  console.log(newSpeed);
};

Car.prototype.break = function () {
  slower = this.speed - 5;
  console.log(slower);
};

const ElectricVehicle = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

ElectricVehicle.prototype = Object.create(Car.prototype);

ElectricVehicle.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

ElectricVehicle.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
};

const tesla = new ElectricVehicle('tesla', 240, 100);
console.log(tesla);

tesla.chargeBattery(80);
console.log(tesla);

tesla.accelerate();
console.log(tesla);
