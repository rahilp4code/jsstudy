// // var binar = numbs.length / 2;

// const fiftyFifty = function (arr) {
//   return Math.trunc(arr.length / 2);
// };

// // fiftyFifty(numbs);

// // if (numbs[fiftyFifty(numbs)] == target) {
// //   console.log(numbs.indexOf(numbs[fiftyFifty(numbs)]));
// // } else if (numbs[fiftyFifty(numbs)] < target) {
// //   const b1 = numbs.slice(numbs[fiftyFifty(numbs)]);
// // } else if (b1[fiftyFifty(b1)] > target) {
// //   const b2 = b1.slice(1, b1[fiftyFifty(b1)]);
// //   if (b2 == target) {
// //     console.log(b2);
// //   }
// // }

// // let minus = 15 / 2;
// // let floatvalue = Math.trunc(minus);
// // console.log(floatvalue);

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];


function BinarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return arr.indexOf(arr[mid]);
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      if (arr[mid] > target) { right = mid - 1 }
    }

  }
  return "Not Found!"
};

console.log(BinarySearch(numbs, 11));
console.log(BinarySearch(numbs, 1));
console.log(BinarySearch(numbs, 5));
console.log(BinarySearch(numbs, 14));
console.log(BinarySearch(numbs, 4343));
