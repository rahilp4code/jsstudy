//Change card title to red
// let A = document.getElementsByClassName('card-title')[0] 
// A.style.color='red'
// console.log(A)
let A = document.getElementById('red')
A.style.color = 'green'
console.log(A)

let B = document.querySelectorAll('.card-title')
// console.log(B)
// for (let i = 0; i < B.length; i++){
//     B[i].style.color='blue'
// }
B[0].style.color = 'red'
B[1].style.color = 'lightgreen'
B[2].style.color = 'blue'

document.querySelector('.where').style.background = 'red'
document.querySelector('.where').style.border = 'red'

document.querySelectorAll('.where')[1].style.background = 'green'
document.querySelectorAll('.where')[1].style.border = 'green'

document.querySelectorAll('.where')[2].style.background = 'blue'
document.querySelectorAll('.where')[2].style.border = 'blue'

console.log(document.getElementsByTagName("a"))

console.log(document.body.getElementsByTagName("a"))

console.log(document.body.querySelector(".card").getElementsByTagName("a"))

console.log(document.getElementsByClassName(".card"))

console.log(document.getElementsByName("ash"))