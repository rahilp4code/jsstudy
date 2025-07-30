class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    //instance methods
    // methods will be added to .prototype property
    calcAge() {
        console.log(2025 - this.birthYear);
    }
    greet() {
        console.log(`hey ${this.fullName}`)
    }
    get age() {
        return 2025 - this.birthYear
    }

    //static method
    static hlo() { console.log('I am static from inside of class obj') }
}

class Student extends Person {
    constructor(fullName, birthYear, club) {
        // super() always needs to happen first!
        super(fullName, birthYear);
        // this.club = club
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I am from ${this.club} club`)
    }
    calcAge() {
        console.log(`I'm ${2025 - this.birthYear} year old`)
    }
}
const kuroko = new Student('Tetsu Kuroko', 2005, 'BasketBall')
console.log(kuroko)
kuroko.calcAge()