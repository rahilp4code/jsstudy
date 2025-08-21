"use strict";

const fastBus = {
  busStop: "fastBus",
  busCode: "FB",
  booking: [],
  book(num, name) {
    console.log(
      `${name} Booked a seat on ${this.busStop} ${this.busCode}${num}`
    );
    this.booking.push({ Bus: `${this.busCode}${num}`, name });
  },
};

fastBus.book(815, "rahil");
fastBus.book(815, "Faiz And Firoz");

const book = fastBus.book;

const blackBus = {
  busStop: "BlackBus",
  busCode: "BB",
  booking: [],
};

//⭐.bind Method⭐
// Bind doesnt immediately call the function instead it returns a new function which then is called/invoked

const bookBB = book.bind(blackBus); // can create multiple function for all other objects

bookBB(32, "rahil");
console.log(blackBus);

// taking it a step further by setting default values

const bookbb21 = book.bind(blackBus, 21); // its called partial application(a part of application is already applied)

bookbb21("sahil");
bookbb21(22, "firoz"); //🌟Here even if u define both arguement the default wont change
bookbb21("faiz");
console.log(blackBus);

//example

const airline = {
  airplane: 10,
  buyplane() {
    airline.airplane++;
    // console.log(airline)
    console.log(this);
    console.log(airline.airplane);
  },
};
// airline.buyplane()

//🗂️document.body.querySelector('.buy').addEventListener('click', airline.buyplane.bind(airline))

//example setting default value

const tax = (rate, val) => val + val * rate;
console.log(tax(0.25, 100));

const taxInd = tax.bind(null, 0.4);
// const taxInd =(val)=>val=val*0.40
console.log(taxInd(1000));

// const tax2 = (rate = 0.5) = val => val + val * rate (WRONG)
// console.log(tax2(null)(1500))

// right
// function tax2(val) {
//     return taxInd(val)
// }
// console.log(tax2(4000))

const tax2 = function (rate) {
  return function (val) {
    console.log(val + val * rate);
  };
};
const tax50 = tax2(0.5);
tax50(5000)(
  //LIFE= Immediately Invoked Function

  //LLFE "useful when we wanna run a nameless function once"
  (function () {
    console.log("i can only run Once");
  })()
);
// (() => {
//     console.log('same here')
// })(); doesnt work
