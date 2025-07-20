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

// console.log(restaurant.openingHours.mon.open)
// console.log(restaurant.openingHours.thu.open)

//way 1 to wind whether mon day prsent

if (restaurant.openingHours && restaurant.openingHours.mon) { console.log(restaurant.openingHours.mon.open) }

//Optional chaining helps find if a property exist or not it returns undefined immediatly. it works like nullish targeting undefined and null
//?.

console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.thu)

let days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

for (const day of days) {
    const open = restaurant.openingHours[day]?.open;
    console.log(`On ${day}, we open at ${open}`)

}

console.log(restaurant.orderPizza ?? 'does not exist')

const arr = [{ name: 'ash', id: 21 }];

console.log(arr[0]?.name ?? 'no no')
