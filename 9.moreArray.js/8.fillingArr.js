// console.log([1, 2, 3, 4, 5, 6, 7])
// console.log(new Array(1, 2, 3, 4, 5, 6, 7))

//empty array and fill method

const x = new Array(7); //length is 7
// console.log(x)
// console.log(x.map(() => 8)); not working

//.fill(val,strt,end)
// x.fill(7)
// x.fill(3, 3)
x.fill(7, 1, 6)
// x.fill()
console.log(x)

// Array.from

console.log(Array.from({ length: 8 }, () => 2))

const z = Array.from({ length: 10 }, (_, i) => 1 + i)
console.log(z)

const randomDiceRoll = Array.from({ length: 100 }, (_) => Math.floor(Math.random() * 6 + 1))
console.log(randomDiceRoll)


// labelBalance.addEventListener('click', function () {
//     const movementsUi = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace("€", '')));
//     console.log(movementsUi);
// }
// ) 