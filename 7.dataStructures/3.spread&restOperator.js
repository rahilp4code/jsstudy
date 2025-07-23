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


    orderPizza: function (mainIng, ...otherIng) {
        console.log(mainIng);
        console.log(otherIng);
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your Delicious pasta with ${ing1},${ing2} and ${ing3}`)
    }

}

//SPREAD OPERATOR


// let arr = [2, 3, 4]
// let newArr = [1, ...arr, [5]]
// console.log(newArr) // logs array
// console.log(...newArr) // logs individuals (shalllow copy)

// const newMenu = [...restaurant.mainMenu, 'poha'];
// console.log(newMenu)
// // console.log(restaurant)

// //join 2 array

// const wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(wholeMenu)

// //Iterables are array,strings,maps,sets. Not objects

// let str = 'Rahil'
// let letters = [...str, '.S']
// console.log(letters)
// console.log(...str)
// console.log(`${...str} ,P`)//not gonna work

// // adding multiple lines into function

// // const ing = [
// //     prompt(`Tell your prefered Ingredients, Ingredient 1 ? `),
// //     prompt(`Ingredient 2`),
// //     prompt(`Ingrdient 3`),
// // ];
// // console.log(ing);

// //restaurant.orderPasta(ing[0], ing[1], ing[2]); // way 1
// //restaurant.orderPasta(...ing) // way 2 better

// //obj

// const newRestaurant = { ...restaurant, Founder: 'Rahil', FoundedIn: '2004' }
// console.log(newRestaurant)

// const restaurantCopy = { ...restaurant }
// restaurantCopy.name = `Bro's Pizza`;
// console.log(restaurant.name)
// console.log(restaurantCopy.name)




//REST OPERATOR


//SPREAD, because on RIGHT side of '='  expand

const arr1 = [1, 2, ...[3, 4]]
console.log(arr1)

//REST, because on LEFT side of "="  compress

// destructuring
const [a, b, ...c] = [1, 2, 3, 4, 5, 6]
console.log(a, b, c)

const [p, , r, ...otherFoods] = [
    ...restaurant.mainMenu, ...restaurant.starterMenu
];
console.log(p, r, otherFoods)

//OBJECTS

const { sat, ...weekDays } = restaurant.openingHours
console.log(weekDays)

// function

let add = function (...numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]


    }
    console.log(sum)
}

add(1, 2, 3)
add(1, 2, 3, 4, 5)
add(1, 2, 3, 5, 6, 7, 7)

const x = [56, 56, 56]
add(...x) // using spread to fullfill the rest argument on a variable data
restaurant.orderPizza("chicken", 'extra cheese', 'extra pizza sauce')
restaurant.orderPizza("only cheese") // other arguement is blank