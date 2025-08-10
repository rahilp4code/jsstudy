"use strict";
const bookings = [];

// In function parameter u can set default values which will overright if data is given And default data can be expressions which produce a value or default val can be other param

function bookingSeat(
  FlightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 'not described';
  // price = price || '100$';

  //Directly putting param inside an object will make the param and its value a key:value pair
  const booking = {
    FlightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
bookingSeat(815, 3, 5000);
bookingSeat(815);

// params cant be skipped while calling the function, they are picked up always in order of how they are written and to skip them just add 'undefined' so that its default is picked
bookingSeat(815, 100); //wrong✖️
bookingSeat(815, undefined, 100); // right way to skip✔️
console.log(bookings);
