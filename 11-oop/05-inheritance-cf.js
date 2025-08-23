'use Strict';

function Person(fullName, birthYear) {
    this.Name = fullName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () { console.log(2025 - this.birthYear) };

function Student(fullName, birthYear, club) {
    Person.call(this, fullName, birthYear);
    this.club = club;
};

//creating a link between student prototype and person prototype

Student.prototype = Object.create(Person.prototype) // links created
console.log(Student.__proto__ === Person.__proto__)

// Student.prototype = Person.prototype // wrong way


Student.prototype.intro = function () {
    console.log(`My name is ${this.Name} and I am from ${this.club} Club, age ${2025 - this.birthYear}`);
}

const kuruko = new Student('Tetsu Kuroko', 2005, 'BasketBall');
console.log(kuruko)
kuruko.intro()
kuruko.calcAge() // links created
// console.log(kuruko.intro()) // gives undefined

console.log(kuruko.__proto__) // gives person prototype it should have given student prototype lets fix it
console.log(kuruko.__proto__.__proto__)


Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor)// gives student prototype

//prototype chain

console.log(kuruko instanceof Student)
console.log(kuruko instanceof Person)
console.log(kuruko instanceof Object)

