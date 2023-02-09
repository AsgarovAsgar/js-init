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

// CHALLENGE 3

const EV  = function(make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}

EV.prototype = Object.create(Car.prototype)
Car.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo
}

const tesla = new EV('Tesla', 120, 23)
console.log(tesla);

tesla.chargeBattery(90)
console.log(tesla);

Car.prototype.accelerate = function() {
  this.speed += 20
  this.charge--
  console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`);
}

tesla.accelerate()

// POLYMORPHISM => OVERWRITING BY CHILD
//Inheritence


// Object prototype with ES6 Classes

// class expression
// const PersonCl = class {}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear
  }
  
  // methods will be added to protoype property
  // Instance methods
  calcAge() {
    return 2023 - this.birthYear
  }
  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear
  }

  // Set a property that already exists
  set fullName(name) {
    if(name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name`)
  }
  get fullName() {
    return this._fullName
  }
  // static method
  static hey() {
    console.log('Hey there 🤠');
  }
}

const asgarCl = new PersonCl('Asgar Asgarov', 1999)
console.log('ES6 classes: ', asgarCl.calcAge());
// PersonCl.prototype.greet = function() {
//   console.log(`Hey, ${this.firstName}`);
// }
asgarCl.greet()

// CLASSES IN ES6:
// Classes are NOT hoisted;
// Classes are the first class citizens;
// Classes are executed in strict mode

//GETTERS AND SETTERS

const account = {
  owner: "Asgar",
  movements: [20, 100, -200, 300],
  get latest() {
    return this.movements.slice(-1).pop()
  },
  set latest(mov) {
    this.movements.push(mov)
  }
}

console.log(account.latest);
account.latest = 55
console.log(account.movements);
console.log(asgarCl);
console.log(asgarCl.age);
console.log(asgarCl.fullName);

//
const Personn = function(firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear
}
Personn.prototype.calcAge = function() {
  console.log(2022 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear) //calling parent constructor
  this.course = course
}

// linking prototypes
Student.prototype = Object.create(Person.prototype)
const donald = new Personn('Donald', 1992)
console.log(donald);
donald.calcAge()

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName}. I study ${this.course}`);
}

const mike = new Student('Mike', 2005, 'Enginnering')
mike.introduce()
mike.calcAge()

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor)

