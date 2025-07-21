'use strict';
const weekDays = ['mon  ', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
    [weekDays[3]]://any expression can be used as a property
    {
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
}
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours: openingHours old method

    //new
    openingHours,
    orderPizza(mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your Delicious pasta with ${ing1},${ing2} and ${ing3}`)
    }

}

console.log(restaurant)

// Creating an key property with function parameters

const bookings = []

function bookingSeat(FlightNum, numPassengers, price) {
    const booking = {
        FlightNum,
        numPassengers,
        price,
    }
    console.log(booking);
    bookings.push(booking);
}
bookingSeat(12345, 3, 5000)