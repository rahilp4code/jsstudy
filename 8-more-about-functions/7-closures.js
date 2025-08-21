"use strict";

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} Passengers`);
  };
};

const booker = secureBooking();

booker(); // 1 Passenger
booker(); // 2 Passenger
booker(); // 3 Passenger

console.dir(booker); // ⭐in console u can see the scope of where the passenger count is coming from, the [[scope]] property will be in double backets it means it cant be accessed

// more closures examples

let f;

const g = function () {
  const a = 21;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); // console [[scope]] its closure of a

//re-assigning f function

h();
f();
console.dir(f); //// this time in console [[scope]] its closure of b

//⭐as we reassign  function to a new vale then the old closure basically disaapears and new closures is created

//Example 2

const boardPassenger = function (n, wait) {
  let perGroup = n / 3;

  setTimeout(function () {
    console.log(`we will be boarding all ${n} passenger`);
    console.log(`There will be 3 groups each with ${perGroup} Passengers `);
  }, wait * 1000);

  console.log(`We will start boarding in ${wait} seconds...`);
};

boardPassenger(150, 5);

//⭐setTimeout()functions are basically callback functions which are called after some time by js

//Here in this example, this callback function(setTimeout) was executed completely independently from the boardPassenger function, but still the callback function was able to access/use all the variables that were in the variable environment in which it was created so that 'n' and 'pergroup', this is clear sign of closures being created

//⭐closure does has priority over scope chain
// this means that in above example in the settimeout function if there was no 'perGroup' variable in its parents scope it would try to find it in global
const perGroup = 1000; // it would take this value if u remove the above "perGroup"
