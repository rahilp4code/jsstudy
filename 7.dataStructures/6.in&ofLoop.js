//for..in Loop its for object
const posts = {
    id: 1,
    firstName: 'Faiz',
    lastName: 'Pathan'
}

for (const post in posts) //posts[post] post is key
{
    if (Object.prototype.hasOwnProperty.call(posts, post)) {
        const element = posts[post];
        // console.log(element)
        // console.log(post) array keys
        // console.log(posts) its the array
    }
}

let numbs = [1, 2, 3, 4, 5, 6, 7]

// for (const numb in numbs) // numb is index
// {
//     console.log(numb)
//     console.log(numbs[numb])

// }
//for...of Loop , doesnt work on object its for arrays ans string



// for of loop 

for (const numb of numbs.entries()) // numb is value[0] until [n]
{
    console.log(numb)

};

let fruits = ['apple', 'mango', 'guava', 'watermelon', 'melon']
for (const item of fruits) {
    console.log(item);

};
for (const [i, e] of fruits.entries()) {
    console.log(`${i + 1}: ${e}`)
};

// loops