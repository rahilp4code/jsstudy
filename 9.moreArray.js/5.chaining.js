const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalAmount = movements
    .filter(mov => mov > 0)
    // .map((acc) => acc * 1.17)
    .reduce((acc, cur) => acc + cur, 0)
console.log(totalAmount)    