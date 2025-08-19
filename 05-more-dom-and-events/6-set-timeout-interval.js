// lalert("hello Guys")

// let B = setTimeout(function() {
//     alert("I will come after 3 seconds")
// } , 3000)

// console.log(B)

// let C = prompt("Do you want to see the settimeout after 5 sec (YES or NO")
// if (C.toLowerCase()=="no"){
//  setTimeout(A)
// }
// let A = setTimeout(function() {
//     alert("I will come after 5 seconds")
// } , 5000)

// console.log(A) // returns a timer ID

const sub = (a, b) => {
    console.log("hey i am running " + (a - b))
    return a - b
}

setTimeout(sub, 3000, 10, 5)
// setInterval(sub,10000,15,7);

// let D = setInterval(() => {
//     console.log("I am running ;)")
// }, 1000);

// clearInterval(D)

// let E = setInterval(sub, 1000, 12, 11)

//JONAS

setTimeout(() => console.log('Here is your food🐔'), 4000)

const ing = ['Cheese', 'Tomato Pizza Sauce', 'Spinach']
const pizza = setTimeout((ing1, ing2, ing3) =>
    console.log(`Here is your Pizza with ${ing1}, ${ing2}, and ${ing3}🍕`), 5000, ...ing)

if (ing.includes('Spinach')) clearTimeout(pizza)

//setinterval

//challengr build a clock
setInterval(() => console.log(Intl.DateTimeFormat('en-in', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
}).format(new Date())), 1000)