const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const filter = movements.filter(val => {
    return val > 0
})
console.log(filter)

const helper = []
for (const element of movements) {
    // helper.push(element > 0)//returns true false
    if (element > 0) {
        helper.push(element)
    }
}
console.log(helper)

const filterNegative = movements.filter(val => val < 0)
console.log(filterNegative)