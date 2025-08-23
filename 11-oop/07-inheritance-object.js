const person = {
    calcAge() {
        console.log(2025 - this.birthYear)
    },

    cons(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    },
};
const Student = Object.create(person)
Student.cons = function (fullName, birthYear, club) {
    this.fullName = fullName;
    this.birthYear = birthYear;
    this.club = club;
}
Student.intro = function () {
    console.log(`My name is ${this.fullName} and I am from ${this.club} Club, age ${2025 - this.birthYear}`)
}

const jay = Object.create(Student);
jay.cons('Tetsu kuroko', 2004, "basketball");
console.log(jay);
jay.intro();
jay.calcAge()