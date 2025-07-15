// const fSeries = function (n) {
//     let arr = []
//     arr.push(0, 1)
//     for (i = 0, j = 1; i < n, j < n; i++, j++) {
//         arr.push(arr[i] + arr[j])
//     }
//     return arr[1000]
// }

let nums = [2, 0, 2, 1, 1, 0]
let l = 0;
let m = 0;
let h = nums.length - 1;
// let [l, m, h] = [0, 0, nums.length - 1]
while (m <= h) {
    if (nums[m] == 0) {
        [nums[m], nums[l]] = [nums[l], nums[m]]
        l = l + 1;
        m = m + 1;
        console.log(nums)
    }
    else if (nums[m] == 1) {
        m = m + 1;
    }
    else {
        [nums[m], nums[h]] = [nums[h], nums[m]]
        h = h - 1;
        console.log(nums)
    }
}
console.log(nums)