"use Strict";

function person(firstName, lastName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  //Never Do This, it will create copies of this method ,instead create prototype
  // this.calcAge = function () {
  //     console.log(2025 - this.birthYear)
  // };
}

const rahil = new person("Rahil", "Pathan", 2004);
console.log(rahil);
const sahil = new person("Sahil", "Pathan", 2002);
console.log(sahil);
const urwa = new person("Urwa", "Pathan", 2012);
console.log(urwa);

// instanceof
//gives boolean value if its true
console.log(rahil instanceof person);

//1. new {} is created
//2. function is called, this={}
//3. {} linked to prototype
//4. function automatically return {}

//Creating Prototype

console.log(person.prototype);
person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};
rahil.calcAge();

sahil.calcAge();
urwa.calcAge();

console.log(rahil.__proto__);
console.log(rahil.__proto__ === person.prototype);
console.log(person.__proto__ === person.prototype); // FALSE
//person.prototype above is actually not the prototype of the function but it whats gonna be used as the prototype of all the objects that are created with the person constructor function

// .isPrototypeOf()

console.log(person.prototype.isPrototypeOf(rahil));
console.log(person.prototype.isPrototypeOf(sahil));
console.log(person.prototype.isPrototypeOf(person)); //false
// .prototypeOfLinkedObjects (should have been the name)

//adding properties in prototype which then will be inherited by all child obj

person.prototype.species = "human";
console.log(rahil.species, sahil.species);

//.hasOwnProperty() to check whether its inherited the property or its childs

console.log(rahil.hasOwnProperty("firstName"));
console.log(rahil.hasOwnProperty("species"));

console.log(rahil.__proto__); // person.prototype
console.log(rahil.__proto__.__proto__); // Object.prototype
console.log(rahil.__proto__.__proto__.__proto__); // Null

console.dir(person.prototype.constructor); // shows the person constructor

//prototype of array

let arr = [1, 2, 3, 4, 1, 2, 3, 4]; // new Array === []
console.log(arr.__proto__); // shows all methods
console.log(arr.__proto__.__proto__); // Object.prototype
console.log(arr.__proto__ === Array.prototype); //true

//Crating our own function

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//dom elemets have 7-8 prototype chain

// const h1 = document.querySelector('h1')
// console.dir(h1)
