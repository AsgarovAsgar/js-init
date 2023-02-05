'use strict'

// OOP with JavaScript //
const Person = function(firstName, birthYear) {
  // intance properties
  this.firstName = firstName,
  this.birthYear = birthYear

  // never do this. Never create a method inside of the constructor function!
  // this.calcAge = function() {
  //   console.log(2023 - this.birthYear);
  // }
}

// new Person('Asgar', 24)
const asgar = new Person('Asgar', 24)  // instance
console.log(asgar);

// IMPORTANT !!!
// 1. New empty object {} is created
// 2. function is called, this = {}
// 3. {} is linked to prototype
// 4. function automatically returns {}

const micky = new Person('Micky', 1970) // another instance
const panter = new Person('Panter', 1960) // again instance
console.log(micky, panter);
console.log(asgar instanceof Person); // true


// PROTOTYPES
console.log(Person.prototype);

Person.prototype.calcAge = function() {
  console.log(2023 - this.birthYear);
}

asgar.calcAge()
console.log('asgar.__proto__', asgar.__proto__);
console.log(asgar.__proto__ === Person.prototype); // proves that object (asgar) is linked to the prototype (Person). RULE: 3

Person.prototype.species = 'Homo Sapiens'
console.log(asgar, micky.species);  // species is not OWN property of objects. That's why we do not see it. It is inherited property.
console.log(asgar.hasOwnProperty('firstName')); // true
console.log(asgar.hasOwnProperty('species')); // false

// PROTOTYPE CHAINING
// Object.__proto__ => null
// Person.__proto__ => Object.prototype
// asgar.__proto__ => Person.prototype 

// Challenge 1

const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function() {
  this.speed -= 5
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)

bmw.accelerate()
bmw.accelerate()
mercedes.brake()