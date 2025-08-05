// Object.create()

const person = {
    calcAge() {
        console.log(2025 - this.birthYear)
    },

    cons(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const p1 = Object.create(person)
// console.log(p1) //empty
p1.name = 'rahil';
p1.birthYear = 2004;
p1.calcAge();
console.log(p1)

console.log(p1.__proto__)

const faiz = Object.create(person)
faiz.cons('faiz Pathan', 2019)
console.log(faiz)
faiz.calcAge() 