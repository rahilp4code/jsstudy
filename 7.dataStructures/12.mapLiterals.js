// Map Literals

// instead of using .set adding A WHOLE ARRAY IN MAP AT THE START

let openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 0,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    }
}

const quiz = new Map([
    ['Question', 'Which programming language is best in the world?'],
    [1, 'C'],
    [2, 'java'],
    [3, 'Python'],
    [4, 'JavaScript'],
    ['Correct', 4],
    [true, 'Correct🥳'],
    [false, 'NOPE']
]);
console.log(quiz)

//convert objects to maps

console.log(Object.entries(openingHours))
const openMaps = new Map(Object.entries(openingHours))
console.log(openMaps)

// map iteration

for (const [key, val] of quiz) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${val}`);
}

// const ans = Number(prompt('Your Answer'))
// console.log(ans)

// console.log(quiz.get(quiz.get('Correct') === ans));

// Convert map to array

console.log(...quiz)
console.log(quiz.entries())
console.log(quiz.keys())
console.log(quiz.values())