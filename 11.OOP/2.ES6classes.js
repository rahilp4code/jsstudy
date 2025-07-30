// class expression

// const person = class {}

//class declaration

class Person {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    //instance methods
    // methods will be added to .prototype property
    calcAge() {
        console.log(2025 - this.birthYear);
    }
    greet() {
        console.log(`hey ${this.firstName}`)
    }
    get age() {
        return 2025 - this.birthYear
    }

    //static method
    static hlo() { console.log('I am static from inside of class obj') }
}
const rahil = new Person('rahil', 'pathan', 2004)
console.log(rahil)
rahil.calcAge()
console.log(rahil.age)

console.log(rahil.__proto__ === Person.prototype) //true
// rahil.greet()

// Person.prototype.greet = function () {
//     console.log(`hey ${this.firstName}`)
// }
rahil.greet();

//classes
//1.classes are not hoisted (functions/methods should be declared before use or wont work)
//2.classes are first class citizens
//3. classes are executed in strict mode

// static methods
// static method is a method only available to the constructor not the user or instance
// eg. Array.from(). number.parseInt()
// [1, 2, 3].Array.from //will throw 

// adding static method

Person.hey = function () {
    console.log('Hey How Are You🙂')
}
Person.hey();
Person.hlo();
// rahil.hey(); // wont work on instances

//in class constructor there is the way of crating static method