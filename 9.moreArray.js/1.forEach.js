// 1] .forEach(func(value,index,array))

const abc = ["a", "b", "c"];

abc.forEach((value, index, array) => console.log(value, index, array));

// Expected output:  "a" 0 Array ["a", "b", "c"]

// const array = [200, 450, -400, 3000, -650, -130, 70, 1300];
const array = [200, 450, -400]; //made it short so it wont log too many values🙂

for (const element of array) {
    if (element < 0) {
        console.log(`You Windrew ${Math.abs(element)}`)
    } else {
        console.log(`you deposited ${element}`)
    }
};

console.log('___________________________________________')

for (const [i, val] of array.entries()) {
    if (val < 0) {
        console.log(`Transactiob ${i + 1}: You Windrew ${Math.abs(val)}`)
    } else {
        console.log(`Transactiob ${i + 1}: you deposited ${val}`)
    }
}

console.log('_____For Each_____');

array.forEach(function (element) {
    if (element < 0) {
        console.log(`You Windrew ${Math.abs(element)}`)
    } else {
        console.log(`you deposited ${element}`)
    }
});

//0:function(200)
//1:function(450)
//2:function(-400)
//...

console.log('___________________________________________')

array.forEach(function (element, index) {
    if (element < 0) {
        console.log(`Transactiob ${index + 1}: You Windrew ${Math.abs(element)}`)
    } else {
        console.log(`Transactiob ${index + 1}: you deposited ${element}`)
    }
});

//forEach is cleaner than forof but we cannt use break or continue

console.log('forEach with Maps and Sets');

console.log('With Maps')
const currency = new Map([
    ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['INR', 'Indian Rupees'],
]);
//build the Map in [] to run the loop

currency.forEach(function (val, i, map) {
    console.log(`${i}: ${val}`)
})

console.log('with Sets')

const currencyUnique = new Set(['USD', 'EUR', 'INR', 'SAR', 'USD', 'INR'])
console.log(currencyUnique

)
currencyUnique.forEach(function (val, i, set) {
    console.log(`${i}: ${val}`)
})