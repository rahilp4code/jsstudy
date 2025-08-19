// 1] .forEach(func(value,index,array))

const array1 = ["a", "b", "c"];

array1.forEach((value, index, array) => console.log(value, index, array));

// Expected output:  "a" 0 Array ["a", "b", "c"]


//2] .map(func)

const array12 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array12.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

//3] .filter(func)

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


//4] .reduce(func)

const arr5 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
const sumWithInitial = arr5.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumWithInitial);
// Expected output: 10
