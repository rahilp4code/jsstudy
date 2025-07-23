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
    orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your Delicious pasta with ${ing1},${ing2} and ${ing3}`)
    }
}



//use Any data type, return Any data type
// SHORT CIRCUITING OR

console.log('rahil' || 2904)
console.log('' || 2904)
console.log(true || 0)
console.log(undefined || null) // since both are not true and its .log it will return 2nd val
console.log(undefined || null || 'hello' || 2 || true)

// restaurant.guest = 29; // if the value here was 0 it will still log the 20 u already know why so yeah
const guest1 = restaurant.guest ? restaurant.guest : 20
console.log(guest1)

const guest2 = restaurant.guest || 20
console.log(guest2)

//nullish : null and undefined (NOT 0 and '')

restaurant.guest = 0
const guest3 = restaurant.guest ?? 20
console.log(guest3)


console.log('_____AND_____')

//SHORT CIRCUITING AND

console.log(0 && 2904) // it would log 0 without checking second val because the statement is already false because of first false value 

console.log('rahil' && 2904) // it would log second value because the first vale was true so it moved onto second printed it

console.log(2904 && '')
console.log(2904 && 'hii' && null && 'jonas')

//Practival examle

if (restaurant.orderPizza) {
    restaurant.orderPizza('cheese', 'veggies', 'pizza tomato sauce')
}
restaurant.orderPizza && restaurant.orderPizza('non-veg', 'chicken', 'beef', 'peperoni')