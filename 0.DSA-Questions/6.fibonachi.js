//function for printing fibonacchi series

const fSeries = function (n) {
    let arr = []
    arr.push(0, 1)
    for (i = 0, j = 1; i < n, j < n; i++, j++) {
        arr.push(arr[i] + arr[j])
    }
    return arr
}

console.log(fSeries(10))
// this is the misttake that i was doing🥲👇⬇️

// const fSeries = function (n) {
//     let arr = []
//     arr.push(0, 1)
//     for (i = 0; i < n; i++) {
//         for (j = 1; j < n; j++) {
//             let helper = (arr[i] + arr[j])
//             arr.push(helper)
//         }
//     }
//     return arr
// }


function fibSeries(n, obj) {
    if (n === 0) {
        obj[n] = 0;
        return obj;
    } else if (n === 1) {
        obj[n] = 1;
        return obj;
    } else {
        obj[n] = obj[n - 1] + obj[n - 2];
    }
    return obj;
}

function finnser(n) {
    let a = {};
    for (let i = 0; i <= n; i++) {
        a = fibSeries(i, a);
    }
    return a[n];
}

let v = finnser(5);
console.log(v);  // Output: 5