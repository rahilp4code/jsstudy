'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//⭐1] reverse() ----> toReversed()

console.log(movements)
// const reversedMov = movements.reverse(); reverse is a destructive method
const reversedMov = movements.toReversed();
console.log(reversedMov)
console.log(movements) //OG movements is changed as well with resever!

//to prevent this
//const reversedMov = movements.slice().reverse(); // use slice which creates a copy of OG and doesnt change it

//⭐2] sort() ----> toSorted()
//⭐3]splice()----> toSpliced()

//⭐ To change a value of an array in non Destructive way

//movements[1]=-450;  Destructive way

const newMovements = movements.with(1, -450);
console.log(movements)
console.log(newMovements)



