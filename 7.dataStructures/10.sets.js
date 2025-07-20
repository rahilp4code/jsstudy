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

const orderSet = new Set(['pasta', 'pizza', 'pizza', 'rissoto', 'pasta', 'pizza'])
console.log(orderSet)
console.log(new Set('rahil'))

// .size  (length)

console.log(orderSet.size)

// .has     (includes)
console.log(orderSet.has('pizza'))
console.log(orderSet.has('BREAD'))

// .add  

orderSet.add('garlic bread')
orderSet.add('garlic bread')
console.log('orderSet')

//  .Delete

orderSet.delete('rissota')
console.log(orderSet)

// Sets dont work with index

console.log(orderSet[1]) // there no way of getting value out of a set

// .clear (delete all)

// orderSet.clear()
// console.log(orderSet)

// Looping Set

for (const element of orderSet) {
    console.log(element)
}

//example 1

const staff = ['waiter', 'waiter', 'chef', 'waiter', 'waiter', 'chef', 'maneger'];

const staffUnique = new Set(staff);
const staffUnique2 = [...new Set(staff)]; // array conversion
console.log(staffUnique)
console.log(staffUnique2)


// UNIQUE CHAR
console.log(new Set(['waiter', 'waiter', 'chef', 'waiter', 'waiter', 'chef', 'maneger']).size)

console.log(new Set('rahilasncjlabcashbclasvcasghcjv').size)




// 2025 More Set Methods


const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
]);

const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
]);


//intersection

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods) // prints SET
console.log('Intersection:', [...commonFoods]) // prints ARRAY with []
console.log('Intersection:', ...commonFoods) // perfect

//union

const unionOfFoods = italianFoods.union(mexicanFoods);
console.log('union:', unionOfFoods) // prints SET
console.log('union:', [...unionOfFoods]) // prints ARRAY with []
console.log('union:', ...unionOfFoods) // perfectunion

console.log([...mexicanFoods, ...italianFoods]) // contains Duplicate

console.log([...new Set([...mexicanFoods, ...italianFoods])]) // creating array of two differnt set union

//Difference

const uniqueItalian = italianFoods.difference(mexicanFoods);
console.log('Unique Italian Food:', ...uniqueItalian)
const uniqueMexican = mexicanFoods.difference(italianFoods);
console.log('Unique Mexian Food:', ...uniqueMexican)

//symmetricDifference

const UniqueMI = italianFoods.symmetricDifference(mexicanFoods)
console.log(UniqueMI)
console.log(...UniqueMI)

//isDisjointFrom,super,sub

console.log(italianFoods.isDisjointFrom(mexicanFoods))
console.log(italianFoods.isSubsetOf(mexicanFoods))
console.log(italianFoods.isSupersetOf(mexicanFoods))