// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an ageay (one ageay for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 ageays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's ageay, and remove the cat ages from that copied ageay (because it's a bad practice to mutate function parameters)
2. Create an ageay with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (age1, age2) {
    let juliaNoob = age1.slice();
    juliaNoob.splice(0, 1);
    juliaNoob.splice(-2);
    // const juliaNoob = age1.slice(1, -2);
    const bothData = [...juliaNoob, ...age2];
    bothData.forEach(function (val, i) {
        if (val >= 3)
            console.log(`Dog number ${i + 1} is an adult, and is ${val} year old`);
        else {
            console.log(`Dog number ${i + 1} is still a puppy🐶`);
        }
    });
}

// checkDogs(juliaData, kateData)
// console.log(juliaData)


// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an ageays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogAges = [5, 2, 4, 1, 15, 8, 3];
const dogAges1 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (dog) {
    const humanDogAge = dog.map((age) => (age <= 2) ? 2 * age : 16 + age * 4);
    const filter = humanDogAge.filter((val) => val >= 18);
    // const reduce = filter.reduce((acc, cur) => acc + cur /* / filter.length */, 0)
    const reduce = filter.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)

    //2 3. (2+3)/2 =2.5==== 2/2+3/2=2.5

    // console.log(filter)
    // console.log(reduce / filter.length)
    console.log(reduce)
}
// calcAverageHumanAge(dogAges);
// calcAverageHumanAge(dogAges1);




//Challenge 3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge2 = function (dog) {
    const humanDogAge = dog.map((age) => (age <= 2) ? 2 * age : 16 + age * 4).filter((val) => val >= 18).reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
    console.log(humanDogAge)
    // console.log(filter.length)
}
// calcAverageHumanAge2(dogAges);
// calcAverageHumanAge2(dogAges1);

//⭐PRACTICE⭐
const accounts = [
    {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, 400, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
        hobbies: ['reading', 'teaching', 'Making courses', 'traveling'],
        weight: 65
    },

    {
        owner: 'Jessica Davis',
        movements: [5000, 3400, 400, -150, -790, -3210, -900, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
        hobbies: ['eating', 'teaching',],
        weight: 70
    },

    {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -790, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
        hobbies: ['gaming', 'teaching', 'Learning'],
        weight: 80
    },

    {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 8500, 400, 90],
        interestRate: 1,
        pin: 4444,
        hobbies: ['gardening', 'cooking', 'baking'],
        weight: 90
    },]

//1. print pin of jonas
const acc1Pin = accounts.find(acc => acc.owner === 'Jonas Schmedtmann').pin;
console.log(acc1Pin);

//2. which object movements contain 1000 & 700
const only1070 = accounts.find(acc => acc.movements.includes(1000) && acc.movements.includes(700));
console.log(only1070);

//3. make an array with all movements together
// const allMovements = accounts.map(mov => mov.movements).flat()
const allMovements = accounts.flatMap(mov => mov.movements);
console.log(allMovements);

//4. make an array of all unique elemnts of all movements
const uniqueElements = [...new Set(accounts.flatMap(mov => mov.movements))];
console.log(uniqueElements);

//5. get all the hobbies which have teaching in them but teaching shoulnt be in that array
const teaching = [...new Set(accounts.filter(mov => mov.hobbies.includes('teaching')).flatMap(mov => mov.hobbies).filter(val => val != 'teaching'))]
console.log(teaching)

//6. check if evryone weight is above 70
const weight = accounts.every(mov => mov.weight > 70);
console.log(weight)

//7. any1 has 4 or more hobbies
const fourOrMore = accounts.some(mov => mov.hobbies.length >= 4)
console.log(fourOrMore)

//8. who is heaviest
const heavy = accounts.flatMap(mov => mov.weight)
const heaviest = Math.max(...heavy) // doesnt accept array as arguement needs seperate val use spread op
console.log(heaviest)

//9. length of movements which are greater than 1000
// const greater1000 = accounts.flatMap(acc => acc.movements).filter(val => val >= 1000).length
// const greater1000 = accounts.flatMap(acc => acc.movements).reduce((acc, val) => (val >= 1000 ? acc++ : acc), 0) // wont work because ++ is suffix and it takes action in next loop
const greater1000 = accounts.flatMap(acc => acc.movements).reduce((acc, val) => (val >= 1000 ? ++acc : acc), 0)
console.log(greater1000)

//10. objects with the sum of movements {deposite and withdrawal}
const /*sumOf2*/{ deposite, withdrawal } = accounts.flatMap(acc => acc.movements).reduce((acc, val) => {
    val > 0 ? acc.deposite += val : acc.withdrawal += val
    return acc
}, { deposite: 0, withdrawal: 0 })
// console.log(sumOf2)
console.log(deposite, withdrawal)



// 4.Title maker
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);

    const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

    const titleCase = title
        .toLowerCase()
        .split(' ')
        .map(word => (exceptions.includes(word) ? word : capitalize(word)))
        .join(' ');

    return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));


// Coding Challenge #4

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/


const breeds = [
    {
        breed: 'German Shepherd',
        averageWeight: 32,
        activities: ['fetch', 'swimming'],
    },
    {
        breed: 'Dalmatian',
        averageWeight: 24,
        activities: ['running', 'fetch', 'agility'],
    },
    {
        breed: 'Labrador',
        averageWeight: 28,
        activities: ['swimming', 'fetch'],
    },
    {
        breed: 'Beagle',
        averageWeight: 12,
        activities: ['digging', 'fetch'],
    },
    {
        breed: 'Husky',
        averageWeight: 26,
        activities: ['running', 'agility', 'swimming'],
    },
    {
        breed: 'Bulldog',
        averageWeight: 36,
        activities: ['sleeping'],
    },
    {
        breed: 'Poodle',
        averageWeight: 18,
        activities: ['agility', 'fetch'],
    },
];

// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(
    breed =>
        breed.activities.includes('fetch') && breed.activities.includes('running')
).breed;
console.log(dogBothActivities);

// 3.
// const allActivities = breeds.map(breed => breed.activities).flat();
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
    ...new Set(
        breeds
            .filter(breed => breed.activities.includes('swimming'))
            .flatMap(breed => breed.activities)
            .filter(activity => activity !== 'swimming')
    ),
];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every(breed => breed.averageWeight > 10));

// 7.
console.log(breeds.some(breed => breed.activities.length >= 3));



// Coding Challenge #5

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
TEST DATA:*/


const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
    { weight: 18, curFood: 244, owners: ['Rahil'] }, //recFood = 244
];

//1.

dogs.flatMap(dog => dog.recommentedFood = Math.floor(dog.weight ** 0.75 * 28)); //my way
// dogs.forEach(dog => dog.recFood = Math.floor(dog.weight ** 0.75 * 28)); jonas way
console.log(dogs);

//2.
const sarahDog = dogs.filter(dog => dog.owners.includes("Sarah")).map(dog => (dog.curFood > dog.recommentedFood) ? 'Eating too much!' : 'Eating too little')
// console.log(sarahDog)

//3.
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recommentedFood).flatMap(acc => acc.owners)
const ownersToolittle = dogs.filter(dog => dog.curFood < dog.recommentedFood).flatMap(acc => acc.owners)
console.log(ownersTooMuch)
console.log(ownersToolittle)

//4.

const string = `${ownersTooMuch.join(' and ')}'s dogs eat too much!" and ${ownersToolittle.join(' and ')}'s dogs eat too little!`
console.log(string)

//5.

console.log(dogs.some(acc => acc.curFood === acc.recommentedFood));

//6.

console.log(dogs.some(acc => acc.curFood > acc.recommentedFood * 0.9 && acc.curFood < acc.recommentedFood * 1.1));

//7.

const okay = dogs.filter(acc => acc.curFood > acc.recommentedFood * 0.9 && acc.curFood < acc.recommentedFood * 1.1).flatMap(acc => acc.owners)

console.log(okay)

//8.❌failed

const sortByRF = dogs.toSorted((a, b) => a.recommentedFood - b.recommentedFood)
console.log(sortByRF)

//9. group by eatstoomuch and eatstoolittle

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const groupedDogs = Object.groupBy(dogs,
    dogs => {
        //  dogs.curFood > dogs.recommentedFood ? 'EatsTooMuch' : 'EatsTooLittle');
        if (dogs.curFood > dogs.recommentedFood) {
            return 'EatsTooMuch';
        } else if (dogs.curFood < dogs.recommentedFood) return 'EatsTooLittle'
        else return 'EatsOkay'
    })
// console.log(groupedDogs)

//10. group by the number of owners they have

const ownerHowMany = Object.groupBy(dogs, dog => dog.owners.length > 1 ? '2 or More Owners' : "Single Owner") // mine
const ownerss = Object.groupBy(dogs, dog => `${dog.owners.length}-owners`) //jonas
// dogs.map(acc => acc.owners.length)
// console.log(ownerHowMany)
// console.log(ownerss)