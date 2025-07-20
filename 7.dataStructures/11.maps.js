const dhaba = new Map();

// .set  fill map
dhaba.set("name", "PaPaDaDhaba");
dhaba.set(1, "Gujrat");
console.log(dhaba.set(2, "Punjab"));
console.log(...dhaba);
dhaba
    .set("menuu", "lassi", "parathe")
    .set("categories", "Indians", "desiFood")
    .set("open", 5)
    .set("close", 21)
    .set(true, "be are open")
    .set(false, "be are closed")
console.log(dhaba);

//.get 

console.log(dhaba.get(true));
console.log(dhaba.get('name'));
console.log(dhaba.get(2));
console.log(dhaba.get(1));

//GG

const time = 20;
console.log(dhaba.get(time > dhaba.get('open') && time < dhaba.get('close')))

// .has

console.log(dhaba.has('categories'));

//.delete

dhaba.delete(1)
console.log(dhaba)

//.size    // no parenthesis

console.log(dhaba.size)

//.clear

// dhaba.clear()
// console.log(dhaba)

// we can set array and object as keys of map

dhaba.set(['h', 'i'], 'hellow')
console.log(dhaba)

console.log(dhaba.get(['h', 'i'])) // array as key property is undefined

// to make it work

const arr = [1, 2]
dhaba.set(arr, 'hellow')
console.log(dhaba.get(arr)) // this will work and can set key as array

// maps can set dom elemets as key as well🤯

//dhaba.set(document.querySelector('h1'), 'its a heading lol') //you hover on the key property in console to see it highlight h1 on the web page
console.log(dhaba)
