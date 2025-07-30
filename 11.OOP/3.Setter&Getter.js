// set/get in object

//set must have one parameter

const acc = {
    name: 'rahil',
    movements: [1200, 13000, 15400, -20000],

    get latest() {
        return this.movements.slice(-1).pop()
    },
    set latest(mov) {
        this.movements.push(mov);
    }
};
console.log(acc)

console.log(acc.latest)
acc.latest = 2000
console.log(acc.movements)
console.log(acc.latest)

this.fullName = fullName
//set/get in object

class Person {
    constructor(fullName, birthYear) {
        this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2025 - this.birthYear);
    }
    greet() {
        console.log(`hey ${this.firstName}`)
    }

    //set a property that already exists, which cause conflict between the OG property and the set property and causes set to changed the OG property
    set fullName(name) {
        console.log(name);
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not fullname`)
    }

    // use get to get the OG property 
    get fullName() {
        return this._fullName
    }
}
const rahil = new Person('rahil Pathan', 2004) // only 1`will be added if only first name is given
console.log(rahil)


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