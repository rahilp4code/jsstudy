// findings roots

console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))

//finding max

console.log(Math.max(1, 2, 3, 57, 56, 48, 43, 98))
console.log(Math.max(1, 2, 3, 57, 56, 48, 43, '98')) //does type coersion
console.log(Math.max(1, 2, 3, 57, 56, 48, 43, '98px')) //doesnt do parsing

//finding min

console.log(Math.min(1, 2, 3, 57, 56, 48, 43, 98))
console.log(Math.min('1', 2, 3, 57, 56, 48, 43, 98))
console.log(Math.min('px', 2, 3, 57, 56, 48, 43, 98))

//.random

console.log(Math.trunc(Math.random() * 6) + 1)

const randomGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomGenerator(0, 3))
console.log(randomGenerator(0, 100))

//.round, .ceil, .floor, .trunc

console.log(Math.round(1.1))
console.log(Math.round(1.5))
console.log(Math.round(1.9))

console.log(Math.ceil(1.3)) //next num
console.log(Math.ceil(1.9))

console.log(Math.floor(1.9)) //the num itself
console.log(Math.floor(1.9))

console.log(Math.trunc(1.2))
console.log(Math.trunc(1.9))

console.log(Math.floor(-1.9)) //in negative floor works opposite
console.log(Math.trunc(-1.9)) //trunc still the same

//rounding decimal

console.log((2.7).toFixed(0)) //gives string
console.log((2.7).toFixed(2)) //value inside fixed is to determine how many decimal will be in log
console.log((2.745).toFixed(3))
console.log(+(2.745).toFixed(3)) //if it takes in string gives num