console.log(document.getElementsByTagName("p")[0]) // prints the element
let x = document.getElementsByTagName("p")[0]
// console.log(x)

console.dir(document.getElementsByTagName("p")[0]) // prints the element with its attributes as an object 
let y = document.getElementsByTagName("p")[0]
// console.dir(y) 

console.log(document.body.firstChild.nodeName) // #text
console.log(document.body.firstElementChild.nodeName) // #div

console.log(first.innerHTML)
console.log(second.innerHTML)

second.innerHTML="urwa is a popo"
 console.log(second.innerHTML) 
first.innerHTML="urwa is a lazy popo" 
 console.log(first.innerHTML)

console.log(first.outerHTML)
console.log(second.outerHTML)

// second.outerHTML="<h2>How are you lazy urwa</h2>"
second.outerHTML="<h2 id='hi'>How are you lazy </h2>"


console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue) // prints the elements data

console.log(document.body.textContent) // copies the text content only of the page no tags
console.log(document.body.firstChild.textContent)

first.hidden=false // it reveals the hidden element by making its hidden statement false

//first.hidden=true // it hides the element by making its hidden statement true

third.hidden=true













