let arr = [3, 8, 6, 2, 4, 1, 9, 5]


for (let i = 0; i < arr.length; i++) {

    for (let j = i + 1; i < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let helper = arr[i];
            arr[i] = arr[j];
            arr[j] = helper
        }
    }
    // return console.log(arr)
}
console.log(arr)





// if (arr[1] > arr[2]) {
//     let temp = arr[1]
//     arr[1] = arr[2];
//     arr[2] = temp
// }