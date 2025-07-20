// For Loop:

// console.log("GYM Weights rep 1 🏋️");
// console.log("GYM Weights rep 2 🏋️");
// console.log("GYM Weights rep 3 🏋️");
// console.log("GYM Weights rep 4 🏋️");
// console.log("GYM Weights rep 5 🏋️");
// console.log("GYM Weights rep 6 🏋️");
// console.log("GYM Weights rep 7 🏋️");
// console.log("GYM Weights rep 8 🏋️");
// console.log("GYM Weights rep 9 🏋️");
// console.log("GYM Weights rep 10 🏋️");

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`GYM Weight repition ${rep} 🏋️`);
// }

// Looping through arrays

const rahil = [
  'Ehsaan',
  'Pathan',
  24,
  'Unemployed',
  'Bangalore',
  ['ash', 'asta', 'goku'],
];

const type = [];

// console.log(rahil.Length); length   property cant be used to count length in objects

for (let i = 0; i < rahil.length; i++) {
  console.log(rahil[i]);

  //filling another array with rahil elements type
  type[i] = typeof rahil[i];
}
console.log(type);

// continue and break

console.log('___ONLY STRINGS___');
for (let i = 0; i < rahil.length; i++) {
  if (typeof rahil[i] !== 'string') continue;
  console.log(rahil[i], typeof rahil[i]);
}

// backward looping

for (let i = rahil.length - 1; i >= 0; i--) {
  console.log(rahil[i]);
}

// loop inside a loop

for (let exerxise = 1; exerxise < 4; exerxise++) {
  console.log(`______Starting Exercise ${exerxise}______`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Weighted Repition ${rep}`);
  }
}

// while loop

let countDown = 10;
console.log('Countdown is going to start SOON!..');
while (countDown >= 0) {
  console.log(`${countDown}`);
  countDown--;
}

//Challenge 4

// you did it with conditionals , with functions it would have been easier

let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
let totalBill = [];

// for (let i = 0; i < bill.length; i++) {
//   if (bill[i] >= 50 && bill[i] <= 300) {
//     tip.push(bill[i] * 0.15);
//     totalBill.push(bill[i] + tip[i]);
//   } else {
//     tip.push(bill[i] * 0.2);
//     totalBill.push(bill[i] + tip[i]);
//   }
// }

// console.log(`Value of the bill in order sequential ${bill}`);
// console.log(`Value of the tip in order sequential ${tip}`);
// console.log(`Total amount bill+tip in sequential order ${totalBill}`);

let calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
  totalBill.push(tip[i] + bill[i]);
}
console.log(`Value of the bill in order sequential ${bill}`);
console.log(`Value of the tip in order sequential ${tip}`);
console.log(`Total amount bill+tip in sequential order ${totalBill}`);

// Challenge 5

const CalcArrayAvg = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    continue;
  }
  console.log(`The sum of the bill array is ${sum}`);
  console.log(`The average of the bill array is ${sum / arr.length}`);
};

CalcArrayAvg(bill);

const str = "abc";
for (let i = 0; i < str.length; i++) {
  val1 += str[i];                               // forward
  val2 += str[str.length - 1 - i];              // reverse index manually
  // console.log(val1);
  // console.log(val2);

  // if (val1 != val2) {

  // }
}

for (let i = 0; i < str.length; i++) {
  let val1 = str.slice(0, i + 1);                // forward
  let val2 = str.slice(str.length - 1 - i);      // reversed logic
  console.log(val1);
  console.log(val2);
}
