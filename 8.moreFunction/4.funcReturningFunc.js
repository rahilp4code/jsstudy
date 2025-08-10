"use strict";

// function greet(greeting) {
//     return function (Name) {
//         console.log(`${greeting}..  ${Name} `)
//     }
// }

// const greetHey = greet("Hey")
// greetHey("rahil")

// Challenge covert above function into arrow function

//my way
let greets = (Name) => {
  console.log(`${Name}`);
};

let greet = (str) => {
  return greets(str);
};

greet("Hey rahil");
// greetHey("rahil")

//his way (lol i didnt even knew we could this arrow function i dont use them i use function declaration)

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name} `);
greetArr("hi")("Noob");
