const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// .fillter(accumilator,urrent Element,current index, entier array)

const balance = movements.reduce((acc, cur, i, arr) => {
    console.log(`Accumilator ${i}: ${acc}+${cur}`)
    return acc + cur
}, 0)
// 0 is the val of accumilator
console.log(balance)

let sum = 0
for (const element of movements) {
    sum += element;
}
console.log(sum)

// maximum number

const max = movements.reduce((accu, curr) => {
    if (accu > curr) { return accu } else { return curr }
}, 0)

console.log(max)
