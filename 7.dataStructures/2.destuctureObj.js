'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

}







const { name, openingHours, categories } = restaurant
// console.log({ name, openingHours, categories })

const { name: restaurantName, openingHours: hours, categories: tags } = restaurant
// console.log({ restaurantName, hours, tags }) //if log is inside {} if will log an object holding those value same goes for []

//default values

const { menu = [], starterMenu: starter } = restaurant
// console.log(menu)

//mutating variables

let a = 229;
let b = 222;
const obj = { a: 2, b: 3, c: 4 };
({ a, b } = obj);
console.log(a, b);

//nested object

const { sat } = openingHours
console.log(sat)
const { sat: { open, close } } = openingHours
console.log(open, close)
const { sat: { open: O, close: C } } = openingHours
console.log(O, C)