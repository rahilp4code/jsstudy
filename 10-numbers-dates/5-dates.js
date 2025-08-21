// Create date

const now = new Date();
console.log(now)

// console.log(new Date('2025-07 - 26')) 
console.log(new Date('December 24,2015'))

console.log(new Date(2100, 8, 2, 0, 0, 1)) //months start from 0-11
console.log(new Date(2025, 10, 31, 10, 11, 1)) // nov 31th doesnt exist

console.log(new Date(0))
console.log(new Date(2025, 8, 2, 12, 2))
console.log(new Date(3 * 24 * 60 * 60 * 1000)) // days,hours,mins,secs,ms starts from 1970

//Working with Dates

const date = new Date(2025, 8, 2, 7, 10)
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.toISOString());
console.log('up')
console.log(date.getTime()); // gives a number which can be used to set a date of that exact time (ms)

console.log(Date.now()) // gives the number of current time 
console.log(new Date(1756777200000))

date.setFullYear(2026) //changes the year
console.log(date)

//operations on date

const day = new Date(2026, 8, 2, 22, 33, 11)
console.log(day)
console.log(Number(day)) //gives the num in ms
console.log(+day)

const caalcDaysPassed = (date1, date2) => Math.abs((date2 - date1)) / (1000 * 60 * 60 * 24)
console.log(caalcDaysPassed(new Date(2026, 8, 2), new Date(2026, 8, 12)))
console.log(caalcDaysPassed(new Date(2026, 8, 2), new Date(2026, 7, 12)))