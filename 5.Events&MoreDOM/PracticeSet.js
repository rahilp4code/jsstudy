// Q no. 1 2 3

let a =document.getElementById("gon")

a.addEventListener('click', function() {
    // alert('Hello GON!')
    location.href="http://GetBootstrap.com"
})

let b =document.getElementById("killua")

b.addEventListener('click', function() {
    // alert('Hello Killua!')
    location.href="http://fitgirl-repacks.site"
})

let c =document.getElementById("leorio")

c.addEventListener('click', function() {
    // alert('Hello Leorio!')
    location.href="http://Hianime.to"
})

let d =document.getElementById("kurapika")

d.addEventListener('click', function() {
    // alert('Hello Kurapika!')  
    // location.href="http://Google.com"
    let url ="http://Google.com"
    window.location= url
})




// Q no. 5

let e =document.querySelectorAll("div")[1]
console.log(e)

let f =document.getElementById("close")

f.addEventListener('click', function() {
    e.classList.toggle("Image")
    e.classList.toggle("Image1")
})

// setInterval(() => {
//     e.classList.toggle("Image")
//     e.classList.toggle("Image1")
    
// }, 2000);