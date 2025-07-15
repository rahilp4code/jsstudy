// recursion 

// let factorial = function (n) {
//     if (n < 2) {
//         return n
//     } return (n * factorial(n - 1))
// }

// console.log(factorial(5))

let fibo = function (n) {
    if (n == 1 || n == 0) {
        return n
    } return (fibo(n - 1) + fibo(n - 2))
}

console.log(fibo(6))

