// .DateTimeFormat

//Experimenting API
//ISO language code table
const today = new Date()
const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    // weekday: 'narrow',
    // weekday: 'short',
    weekday: 'long',
}//nice 
const locale = navigator.language; //sets the language as per browser language
console.log(locale)
// labelDate.textContent = new Intl.DateTimeFormat('en-IN', options).format(today);
// labelDate.textContent = new Intl.DateTimeFormat(currentAcc.locale, options).format(today);
console.log(new Intl.DateTimeFormat(locale, options).format(today))


// .NumberFormat

const num = 4513267;
const option = {
    style: 'unit',
    // unit: 'mile-per-hour',
    unit: 'celsius',
    style: 'percent', // unit is ignored
    style: 'currency', // unit is ignored
    currency: 'INR',
    // useGrouping: false, removes seperator
}

console.log('US  :', new Intl.NumberFormat('en-US', option).format(num)); // 'en-us' works
console.log('India  :', new Intl.NumberFormat('en-IN', option).format(num));
console.log('arabia  :', new Intl.NumberFormat('ar-Sy', option).format(num));
console.log('germany  :', new Intl.NumberFormat('de-DE', option).format(num));
console.log(navigator.language, 'Browser  :', new Intl.NumberFormat(navigator.language, option).format(num));