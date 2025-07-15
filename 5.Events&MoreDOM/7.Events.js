let a = document.getElementById("first")
// console.log(a)

a.onclick = () => {
    console.log("clicked")
} // this code has more priority than the inline code of html

// let b = document.getElementById("btn")
// let x = function (e) {
//     console.log(e.target) // e.target shows the location iguess
//     console.log(e.type)
//     console.log(e.currentTarget)
//     console.log(e.clientX, e.clientY)
//     console.log("Button clicked")
//     //alert("clicked kiya harry bhai ")
// }


b.addEventListener("click", x)

let y = function (e) {
    console.log(e)
    console.log("Button clicked2")
    alert("clicked kiya Ash bhai ")
}

//b.addEventListener("click", y )

//let c = prompt("enter your fav number")

// if (c=="2"){
//     b.removeEventListener("click", ()=>{
//         console.log("Button clicked")
//         alert("clicked kiya harry bhai ")
//     })
// } // not gonna work


//  if (c=="2"){
//     b.removeEventListener("click",x)
// }  // this'll work
