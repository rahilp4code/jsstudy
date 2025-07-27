console.log(23 === 23.0)
console.log(0.2 + 0.1) // js cant do really precise calculations
console.log(0.2 + 0.1 === 0.3) // its false🙂

//converting string to num

console.log(Number('21'));
console.log(+'22') //just add '+' to convert in number

//parsing

console.log(Number.parseInt('23px'))
console.log(Number.parseInt('px23')) // must begin with a number

//parseFlat
console.log(Number.parseFloat('2.4rem'))
console.log(Number.parseInt('2.4rem'))

//.isNaN
console.log(Number.isNaN('25'))
console.log(Number.isNaN('25ps'))
console.log(Number.isNaN(+'25x'))
console.log(Number.isNaN(+'25x'))
console.log(Number.isNaN(25 / 0)) //infinity

//.isFinite (can check if its num)
console.log(Number.isFinite(26))
console.log(Number.isFinite('26'))
console.log(Number.isFinite(+'26x'))
console.log(Number.isFinite(26 / 0)) //its infinite

//.isInteger
console.log(Number.isInteger('2.7'))
console.log(Number.isInteger(27))
console.log(Number.isInteger(27.0))