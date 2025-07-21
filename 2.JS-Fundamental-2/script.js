"use strict";

// let xyzxyz = false;
// let abc = true;

// if (abc) xyzxyz = true;
// if (xyzxyz) console.log(`its true`);

// let private = 213213;
// let interface = "audio";
// aboves variables will show errors because those are future reserved keywords this happens because of strict mode

function fruitJuicer(ing1, ing2) {
  //   console.log(ing1, ing2);
  const juice = `The main ingridients of the juice are ${ing1} apple and ${ing2} mango `;
  //   console.log(juice);
  return juice;
}
fruitJuicer(1, 2);
const mixture = fruitJuicer(1, 2);
console.log(mixture);
console.log(fruitJuicer("banana,", "yogurt,"));

// function declaration

function age(x) {
  return 18 < x;
}
// let rahil = age(21);
// console.log(rahil);
console.log(age(21));

// function expressions

let drivingAge = function (x) {
  return 18 < x;
};

let sahil = drivingAge(12);
console.log(sahil);

// Arrow function

let sum = (x, y) => x + y;
console.log(sum(2, 3));

function sub(x, y) {
  return x - y;
}

let minus = (x, y) => x - y;
console.log(minus(6, 1));

let remainingTime = (time) => {
  let exactTime = 24 - time;
  console.log(`${exactTime} hours is reamining for the day to end`);
};

remainingTime(11.5);

// Challenge #1

const calAverage = function (x, y, z) {
  return (x + y + z) / 3;
};

let checkWinner = function (x, y, z, a, b, c) {
  let teamAqua = calAverage(x, y, z);
  let teamMagma = calAverage(a, b, c);
  // return `(${teamAqua} vs ${teamMagma})`;

  if (teamAqua / teamMagma >= 2) {
    return `Congratulations teamAqua is the WINNER🏆 (${teamAqua} vs ${teamMagma})`;
  } else if (teamMagma / teamAqua >= 2) {
    return `Congratulations teamMagma is the WINNER🏆(${teamMagma} vs ${teamAqua})`;
  } else {
    return `Unfortunately No One is the WINNER🥲 (${teamMagma} vs ${teamAqua})`;
  }
};

console.log(checkWinner(85, 54, 41, 23, 34, 27));

// Chanllenge #2

let calcTip = function (x, y, z) {
  let bill1 = x >= 50 && x <= 300 ? x * 0.15 + x : x * 0.12 + x;
  let bill2 = y >= 50 && x <= 300 ? y * 0.15 + y : y * 0.12 + y;
  let bill3 = z >= 50 && x <= 300 ? z * 0.15 + z : z * 0.12 + z;
  return [bill1, bill2, bill3];
};
console.log(calcTip(125, 555, 44));
