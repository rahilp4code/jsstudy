
'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]

    }
}
// console.log(restaurant)

// arr = [1, 2, 3]
// const [x, y, z] = arr
// console.log(x)
// console.log(y)
// console.log(z)

let [m1, , m2] = restaurant.starterMenu;
console.log(m1, m2);

// solution 1 foe switching

// const help = main
// main = secondary
// secondary = help
// console.log(main, secondary)

// solution two for swtiching

[m1, m2] = [m2, m1];
console.log(m1, m2);

//function
console.log(restaurant.order(1, 0))

const [starter, main] = (restaurant.order(1, 0))
console.log([starter, main])

//nested destructuring

let nested = [2, 3, [4, 5]]
// const [a, , c,d] = nested // d will be undefined u can add pre value if its undifined eg. a=1,c=1,d=1
// console.log([a, c])
const [a, , [b, c]] = nested
console.log([a, b, c])

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[, rating], [, ratingsCount]] = ratings;
console.log([, rating], [, ratingsCount])