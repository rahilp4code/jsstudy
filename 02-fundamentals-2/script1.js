// const rahil = {
//   firstName: "Ehsaan",
//   lastName: "Pathan",
//   birthYear: 2004,
//   job: "Unemployed",
//   location: "Bangalore",
//   friends: ["ash", "asta", "goku"],
// };

// console.log(rahil.firstName); // dot method, doesnt allow expressions
// console.log(rahil["firstName"]); // bracket, allows expression

// const info = prompt(
//   "what do you want to know about rahil? his firstName, lastName, birthYear, job, location, friends"
// );
// if (rahil[info]) {
//   console.log(rahil[info]);
// } else {
//   console.log(
//     "wrong input choose between firstName, lastName, birthYear, job, location, friends"
//   );
// }

const rahil = {
  firstName: 'Ehsaan',
  lastName: 'Pathan',
  birthYear: 2004,
  job: 'Unemployed',
  location: 'Bangalore',
  friends: ['ash', 'asta', 'goku'],

  //   calAge: function (birthYear) {
  //     return 2025 - birthYear;
  //   }

  calAge: function () {
    console.log(this);
    // return 2025 - this.birthYear;
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} ${this.lastName} is ${this.age} year old and is currently working to hone his skills to get a good paying job `;
  },
};

console.log(rahil.calAge());
// console.log(rahil["calAge"]());

console.log(rahil);
console.log(rahil.getSummary());

//  Challenge 3

const mark = {
  fullName: 'Mark Miller',
  weight: 78,
  height: 1.69,

  calcBMI: function () {
    return (this.markBMI = this.weight / this.height ** 2);
  },
};

const john = {
  fullName: 'John Smith',
  weight: 92,
  height: 1.95,

  calcBMI: function () {
    return (this.johnBMI = this.weight / this.height ** 2);
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(mark, john)

if (john.johnBMI > mark.markBMI) {
  console.log(
    `${john.fullName} has higher BMI (${john.johnBMI}) than ${mark.fullName} (${mark.markBMI})`
  );
} else if (john.johnBMI < mark.markBMI) {
  console.log(
    `${mark.fullName} has higher (${mark.markBMI}) than ${john.fullName} (${john.johnBMI})`
  );
} else {
  console.log('something is wrong');
}
