'use strict';
// we are calling the transform function here and into that we are passing the call back function, and remember we call this function callback because we dont call them ourselves we tell js call them later

const allLowerCase = function (str) {
    return str.replaceAll(' ', '').toLowerCase();
}

const firstWordCap = function (str) {
    const [first, ...rest] = str.split(' ');
    return [first.toUpperCase(), ...rest].join(' ');
}

// console.log(allLowerCase('Javascript is the BEST!'))
// console.log(firstWordCap('Javascript is the BEST!'))


//🌟.name method🌟
// shows the name of the function
const transform = function (str, fn) {
    console.log(`Before Transform:${str}`)
    console.log(`After Transform:${fn(str)}`)
    console.log(`Function Name:${fn.name}`)
}

console.log(allLowerCase.name)
transform('Javascript is the BEST!', allLowerCase)
transform('Javascript is the BEST!', firstWordCap)


//JS uses callback all the time
const high5 = function () {
    console.log('👋🙋‍♂️')
};
['abc', 'xyz', 'pqr'].forEach(high5);