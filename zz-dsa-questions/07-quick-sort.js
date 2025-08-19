let array = [4, 2, 6, 3, 7, 1, 5]

let quickSort = function (arr) {

    if (arr.length <= 1) {
        return arr
    }

    let p = arr[Math.floor([arr.length / 2])]
    let left = []
    let right = []
    let middle = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < p) {
            left.push(arr[i])
        }
        else if ((arr[i] > p)) {
            right.push(arr[i])
        }
        else { middle.push(p) }
    }
    return [...quickSort(left), ...middle, ...quickSort(right)]
}

console.log(quickSort(array))

let array1 = [4, 2, 6, 3, 7, 1, 5];

let array2 = [4, 2, 6, 3, 7, 1, 5];

let array3 = [4, 2, 6, 3, 7, 1, 5];
let a = [4, 2, 6, 3, 7, 1, 5];
let b = [4, 2, 6, 3, 7, 1, 5];
let c = [4, 2, 6, 3, 7, 1, 5];
let h = [4, 2, 6, 3, 7, 1, 5];
let e = [4, 2, 6, 3, 7, 1, 5];
let g = [4, 2, 6, 3, 7, 1, 5];
let f = [4, 2, 6, 3, 7, 1, 5];
nums = [2, 0, 2, 1, 1, 0]
var sortColors = function (nums) {
    let left = []
    let right = []
    let middle = []
    for (i = 0; i < nums.length; i++) {
        console.log(i, left)
        if (nums[i] < 1) {
            left.push(nums[i])
        }
        else if ((nums[i] > 1)) {
            right.push(nums[i])
        }
        else { middle.push(1) }
        console.log(i, left)

    }
    return [...left, ...middle, ...right]
}
console.log(sortColors)