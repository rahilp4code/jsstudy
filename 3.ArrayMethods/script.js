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
console.log(array7.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array7.fill(6));
// Expected output: Array [6, 6, 6, 6]
