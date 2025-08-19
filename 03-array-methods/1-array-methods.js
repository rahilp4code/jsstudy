// Array()constructor

new Array();
new Array(1); // 1 slot
new Array(1, 1);
new Array(1, 12, 67);
// new Array(arrayLength);

Array();
Array(1);
Array(11, 61);
Array(11, 12, 76);

let newArr = new Array(7); // makes an array of 7 empty slots if value given is single number,  else if valur given is more it becomes an aaray
console.log(newArr);

const arr = [3, 2, 4, 5, 67, 2, 4, 6, 8, 9];

//Static Method
// 1. Array.from(item,func)

console.log(arr);
console.log(Array.from(arr));
console.log(Array.from("asta"));
console.log(Array.from([2, 3, 4, 5, 6], (x) => x + x));
console.log(Array.from(arr, (x) => x + x));
console.log(Array.from(arr, (x) => x * x));

//2. Array.isArray(value)

console.log(Array.isArray([1, 2, 3, 4, 5]));
console.log(Array.isArray([]));
console.log(Array.isArray("[]"));
console.log(Array.isArray(new Array(1, 2, 3, 4)));
console.log(Array.isArray(new Int16Array([1, 2])));

// 3.Array.of(e1,e2,e3,e4...)

console.log(Array.of("1", 2, 3, 4, 5, true));
console.log(Array.of("1", arr, 3, 4, 5, true));

//Intance Methods
//1] .at

console.log(arr[-1]); // negative index isnt allowed but .at allows it
console.log(arr.at(-10));
console.log("Rahil".at(-2)); // i

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"

//2] .concat

const array2 = ["a", "b", "c", "c"];
const array3 = ["d", "e", "f"];
const array4 = array2.concat(array3); // even duplicate is counted
const array45 = [...array2, ...array3];

console.log(array4);
// Expected output: Array ["a", "b", "c", "c", "d", "e", "f"]

//3] .enteries

const array5 = ["a", "b", "c"];

const iterator1 = array5.entries();
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

//4] .every(functioin)

const isBelowThreshold = (currentValue) => currentValue < 40;

const array6 = [1, 30, 39, 29, 10, 13];

console.log(array6.every(isBelowThreshold));
// Expected output: true

//5] .fill(valur,start,end)

const array7 = [1, 2, 3, 4, 5, 5, 5];

// Fill with 0 from position 2 until position 4
console.log(array7.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
// console.log(array7.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

// console.log(array7.fill(6));
// Expected output: Array [6, 6, 6, 6]

//6] .join(",")

const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(""));
// Expected output: "FireAirWater"

console.log(elements.join("-"));
// Expected output: "Fire-Air-Water"

//7] .pop()

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]

//8] .push()

const animals = ["pigs", "goats", "sheep"];

const count = animals.push("cows");
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push("chickens", "cats", "dogs");
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//9] .shift()

const array8 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

//10] .unshift

const array9 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]

//11] delete

delete array9[1];
console.log(array9);
array9[1] = 2;
console.log(array9);

//12] .sort()

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array10 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

//13] .splice(start/position to add ,deleteCount, e1,e2,e3)

const monthsInYear = ["Jan", "March", "April", "June"];
monthsInYear.splice(0, 1);
const h123213 = monthsInYear.splice(0, 1)[0];
// Inserts at index 1
console.log(monthsInYear);
console.log(h123213);

//14] .slice(start,end)

const animals1 = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals1.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals1.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals1.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals1); // changes arent made on og array

//15] .reverse()

const array11 = ["one", "two", "three"];
console.log("array1:", array11);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array11.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

//16] .includes()

console.log(array11.includes("one"));
console.log(array11.includes("sfsfs"));

//17] .indexOf(vale,startFrom)

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

//18] .lastIndexOf(vale,startFrom)

const array12 = [4, 1, 0, 1, 4];

console.log(array12.lastIndexOf(4));
// Expected output:4

console.log(array12.lastIndexOf(1));
// Expected output: 3

console.log(array12.lastIndexOf(1, 1));
// Expected output: 3

//19] .find(func)

const array13 = [5, 12, 8, 130, 44];

const found = array13.find((element) => element > 10);

console.log(found);
// Expected output: 12

//20] .findIndex()

const foundIndex = array13.findIndex((element) => element > 10);

console.log(foundIndex);
// Expected output: 3

//21] .flat(depth)

const arr14 = [0, 1, 2, [3, 4]];

console.log(arr14.flat());
// expected output: Array [0, 1, 2, 3, 4]

const arr15 = [0, 1, [2, [3, [4, [5]]]]];

console.log(arr15.flat());
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

console.log(arr15.flat(3));
// expected output: Array [0, 1, 2, 3, Array [4, [5]]]

console.log(arr15.flat(Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

//22] .every(func)

const isBelow = (cur) => cur < 40;

const array16 = [1, 30, 39, 29, 10, 13];

console.log(array16.every(isBelow));
// Expected output: true

//23] .some(func)

console.log(array16.some((mov) => mov > 35));
console.log(array16.some((mov) => mov > 40));

//24] .splice(strt,remove numbers, new n-elemets)

const array17 = [1, 30, 39, 29, 10, 13];

// console.log(array17.splice(1))  //only keeps 0 index and deletes all other/ meaning it deleted evrrything from 1 and updated theb array17
console.log(array17.splice(-1)); // delets the last index and returns it and updates arr17
console.log(array17);

//25] .findLast && .findLastIndex

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const lastWithsrawal = movements.findLast((mov) => mov < 0);
console.log(lastWithsrawal);

//your latest large movement was X movement ago
const latestLargeMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 1500
);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex - 1
  } movement ago... `
);

//26] .flat &  flatMap (use them in finverse)

// .flat
// const allAccBalance = accounts.map(mov => mov.movements).flat().reduce((acc, val) => acc + val, 0)
// console.log(allAccBalance) // using map and flat is pretty common operation

// .flatMap (does the job of both .flat and .Map but flat here goes only 1 level deep)

// const overalBalance = accounts.flatMap(mov => mov.movements)
// console.log(overalBalance)
