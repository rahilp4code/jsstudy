// .sort() // sorts alphabetically for numbers add a callback

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const abc = ['d', 'c', 'b', 'a', 'y', 'z', 'x']

console.log(abc.sort())
console.log(movements.sort())

console.log(movements.sort((a, b) => {
    if (a > b) return 1;
    if (b > a) return -1
}
))
console.log(movements.sort((a, b) => a - b)) // ascending  
console.log(movements.sort((a, b) => b - a)) // decending  

// dont use sort if you have a mixed array of strings and numbers