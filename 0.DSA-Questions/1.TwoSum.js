// const numbs = [5, 2, 3, 7, 1, 4];
// const target = 8;
let nums = [3, 2, 4]
let target = 6
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) == target) {
        // console.log(nums[i] + nums[j])
        // console.log(i, j)
        return [i, j]

      }
    }
  }

}
console.log(twoSum(nums, target))
// for (i = 0; i < numbs.length; i++) {
//   for (j = i + 1; j < numbs.length; j++) {
//     console.log(numbs[i] + numbs[j])
//     console.log(i, j)
//     if ((numbs[i] + numbs[j]) == 8) {

//     }
//   }
// }
// function twoNum(numbs, target) {
//   for (i = 0; i < numbs.length; i++) {
//     for (j = i + 1; j < numbs.length; j++) {
//       // console.log(i, j);
//       // console.log(numbs[i] + numbs[j] == target);

//       if (numbs[i] + numbs[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// }
6, [3, 2, 4]
function twoNum2(numbs, target) {
  for (i = 0; i < numbs.length; i++) {
    const rem = target - numbs[i];
    if (numbs.indexOf(rem) > 0) {
      return [i, numbs.indexOf(rem)];
    }
  }
}
// console.log(twoNum(numbs, target));
// console.log(twoNum2(numbs, target));
// console.log(numbs.indexOf('gdsds')); /// if you try to print index of an element which isnt prosent in
