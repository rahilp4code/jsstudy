const eurToUsd = 1.17;
const movements = account1.movements;
// //arrow function
// const movementToUsd = movements.map(val => val * eurToUsd)
// console.log(movementToUsd);

// //Normal function
// const movementToUsd2 = movements.map(function (val) { return val * eurToUsd });

// console.log(movementToUsd2);

// const movementToUsd3 = [];
// for (const element of movements) {
//     movementToUsd3.push(element * eurToUsd)

// }
// console.log(movementToUsd3)

// //arrow function
// const movementToUsd = movement => movement.map(val => val * eurToUsd)
// console.log(movementToUsd(account1.movements))

// //Normal function
// const movementToUsd2 = account1.movements.map(function (val) { return val * eurToUsd })

// console.log(movementToUsd2)

const movementDescription = movements.map((val, i, arr) => {

    return `movement ${i + 1}: you ${val > 0 ? 'deposited' : 'withdrew'} ${Math.abs(val)}`

    // if (val > 0) {
    //     return `movement ${i + 1}: you deposited ${val}`
    // } else { return `movement ${i + 1}: you withdrew ${Math.abs(val)}` };
});

console.log(movementDescription) // made a brand new array which was logged once with all the values instead of many different logs like foreach . its known as not creating a side effect    