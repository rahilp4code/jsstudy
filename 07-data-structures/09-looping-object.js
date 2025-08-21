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
            open: 0,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },


    orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your Delicious pasta with ${ing1},${ing2} and ${ing3}`)
    }

}

// for (const day of Object.keys(restaurant.openingHours)) {
//     console.log(day);}

const openDays = Object.keys(restaurant.openingHours)
console.log(openDays)

let openStr = (`We are open ${openDays.length} days:`)

for (const day of openDays) {
    openStr += `${day},`;
}
console.log(openStr);

const obj = Object.values(restaurant.openingHours)
console.log(obj)

const enteries = Object.entries(restaurant.openingHours)
console.log(enteries)

for (const [key, { open, close }] of enteries) {
    console.log(`on ${key} we open at ${open} and close at ${close}`);
}