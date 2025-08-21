'use strict';

let anime = 'One Piece';

console.log(anime[0]);
console.log(anime[1]);
console.log(anime[2]);
console.log(anime[3]); // its "_" but invincible
console.log('anime'[3]); // m

// .length

console.log(anime.length)
console.log('anime'.length)

// .indexOf

console.log(anime.indexOf('e'))       //first occurance
console.log(anime.lastIndexOf('e'))   //last occurance
console.log(anime.indexOf('Piece'))
console.log(anime.indexOf('piece'))   //Case sensitive will return -1

// 🌟⭐.slice()⭐🌟

console.log(anime.slice(4))           //stars with 4th index "Piece"
console.log(anime.slice(4, 7))        //Ends before 7th index "Pie"  ('pie' length is 7-3)
console.log(anime.slice(0, anime.indexOf(' ')))  // first word
console.log(anime.slice(anime.lastIndexOf(' ') + 1))  // last word

//➖inputs in slice

console.log(anime.slice(-2)) //stars for -2 index till last index
console.log(anime.slice(1, -1))

//⭐Boxing✨
// string is a primitive data and only objects have methods but in javascript boxing is done which creats a string into an box 'ash'={'ash'} and performs function.
console.log(new String('ash'));
console.log(typeof new String('ash'));

// coverts it into obj to perform methods and returns as string
console.log(new String('ash').slice(1, 2));
console.log(typeof new String('ash').slice(1, 2));

// .toUpperCase() & .toLowerCase() 

console.log(anime.toUpperCase());
console.log(anime.toLowerCase());

function fixName(str) {
    str.toLowerCase();
    str = str[0].toUpperCase() + str.slice(1) //add the index before the method to specify
    return str
}
let fix = 'rahil'
console.log(fixName(fix))

const email = 'ash123@gmail.com'
const loginEmail = '   aSH123@gMAil.cOm  \n'
const lowerEmail = loginEmail.toLowerCase()
const trimEmail = lowerEmail.trim()
const finalEmail = loginEmail.toLowerCase().trim();
// string methods can be chained as well
console.log(email === finalEmail, email === trimEmail)


// 🌟.replace

const priceInr = '10cr'
const price$ = priceInr.replace('cr', 'M$').replace('M', " Million")
console.log(price$)

const announcement = ' All passenger come to the boarding door 23, I repeat Boarding door 23';

console.log(announcement.replace('door', 'gate')); // notice only the first appearance of door got replaced
console.log(announcement.replaceAll('door', 'gate')); // replaces all the occurance
console.log(announcement.replace(/door/g, 'gate')); // replaces all the occurance


// Boolean Methods

console.log(anime.includes('One'))
console.log(anime.startsWith('One'))
console.log(anime.startsWith('O'))
console.log(anime.startsWith('One P'))
console.log(anime.endsWith('One'))
console.log(anime.endsWith('e'))

//Example

function checkBag(str) {
    const baggage = str.toLowerCase() // need to lowercase it because inputs might differ  
    // if (baggage.includes('gun'||'knife')) this didnt work
    if (baggage.includes('gun') || (baggage.includes('knife'))) {
        console.log('You need to verify why u have weapons')
    } else (console.log('includes Harmless items'))
}

checkBag('I have SOme FOOD and Drinks and my laptop')
checkBag('I have Some Knife and to sell')
checkBag('I carry a GUn for protection')


//⭐ .split()🌟

console.log('Hi+How+Are+You?'.split('+')) // it will split up this string by + sign and store it in an array
console.log('rahil P'.split(' '))

//Destructuring string

const [firstName, lastName] = 'Rahil P'.split(' ')
console.log(firstName, lastName)

// .join

const newName = ['Mr.', firstName, lastName].join(' ');
console.log(newName)

//EXAMPLE

function firstCap(names) {
    const name = names.split(' ')
    const newArr = [];
    for (const n of name) {
        // newArr.push(n[0].toUpperCase() + n.slice(1))
        newArr.push(n.replace(n[0], n[0].toUpperCase()))
    }
    return newArr
}

console.log(firstCap('rahil sahil urwa mom dad'))


//Padding .padStart

const msg = 'Rahil';
console.log(msg.padStart(10, '_').padStart(15, '-'));
console.log(msg.padStart(5, '_').padStart(10, '-'));
console.log(msg.padEnd(15, '_'));
console.log(msg.padStart(10, "_").padEnd(15, '_'));
console.log(msg) // doesnt change OG 


function hideMax(number) {
    const numbers = number + '';
    const last = numbers.slice(-4);
    return last.padStart(numbers.length, "*")
}
console.log(hideMax(123456789))
console.log(hideMax(123456789))

// .repeat
const message = "Bad Weather... All Departures Will Be Delayed..."
console.log(message.repeat(5));

function Plane(n) {
    console.log(`There are ${n} planes in line ${'✈️ '.repeat(n)} `)
}


Plane(10)