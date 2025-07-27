//this is the max number data type can reach
console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 + 1)
console.log(2 ** 53 + 2)
console.log(2 ** 53 + 3)
console.log(2 ** 53 + 4)

// bigInt(n)
console.log(900719925474099112112121)
console.log(900719925474099112112121n)
console.log(BigInt(90071992547409911211212112))

//Operations

console.log(10000n + 1000n)
console.log(100000000000000000000n + 100000000000000000000000000000000000n)

// console.log(10000000n + 12) // cant mis bif int with other data types

console.log(11n > 10)
console.log(11n == 11)
console.log(11n === 11)
console.log(11n === '11')
console.log(typeof 11n)

console.log(111n + ' its huge')

// squre of bigint

// console.log(Math.sqrt(10n)) not gonna happen error

//division

console.log(12n / 3n)
console.log(10n / 3n) // basically cuts decimal
console.log(10 / 3)