first.className="yellow me"

console.log(first.classList) // [ "yellow", "me" ]

console.log(first.classList.remove("me")) // [ "me" class will be removed ]

console.log(first.classList) // [ "yellow" ]

first.classList.add("me") // "me" class will be added

console.log(first.classList) // [ "yellow", "me" ]

// .classList.toggle 
// Adds the class if it doesnt exist otherwise removes it

console.log(first.classList.toggle("me")) // [ "yellow" ]

console.log(first.classList.toggle("me")) // [ "yellow", "me" ]

// .classList.contains

console.log(first.classList.contains("me")) // true

console.log(first.classList.contains("blue")) // false

// .classList.replace