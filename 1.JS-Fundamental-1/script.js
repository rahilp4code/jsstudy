// alert("Hello, Bangaluru"); // alert is like a pop-up message in the browser

// console.log("Hello, Bengaluru");

let name = "Rahil"; // declaration of a variable
let Name = "ash";
let First_$Person = "Asta"; // _ and $ is allowed in variable names, but it's not a common practice in JavaScript and can be used at beginning or end of a variable name

// let 5thPerson = "Rahil";  invalid

console.log(name); // its a key word
console.log(Name);

let rahil = "in Bengaluru";

if (rahil === "not in Bengaluru") {
  console.log("Rahil is in Bengaluru");
}
// else{
//     alert("Rahil is in Bengaluru");
// }

10 + 20 + 25 - 5;
console.log(10 + 20 + 25 - 5);

let a = 10;
console.log(a);
var b = 20;
console;

let c = 30;
console.log(c); // This will throw an error because 'c' is already declared with 'let' and cannot be redeclared in the same scope.

c = 25;
console.log(c);

d = 300;
d = 400;
let e = 600;
console.log(d); // This will work because 'd' is not declared with 'let' or 'var', so it becomes a global variable.

console.log(`"The value of d is ${e}"`); // Template literals allow for easier string interpolation and multi-line strings.

// let e = `I owe you ${d} rupees`; // this wont woek becuase d is not defined in this scope, it will throw an error if 'd' is not declared before this line.

let f = `I owe you ${e} rupees`;

console.log(f);

let g = `hey \nhow are you?`;
console.log(g);

let h = `hey \t how are you?`;
console.log(h);

let i = `hey \\ how are you?`; // The backslash is escaped with another backslash to include it in the string.
console.log(i);

let j = `hey \${i} how are you?`;
console.log(j);

let age = 10;
let isAdult =
  age >= 18
    ? `Yes you can drive`
    : `No you need to wait for ${18 - age} years to drive`;
console.log(isAdult);
