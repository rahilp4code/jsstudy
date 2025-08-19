let first =document.getElementById('first');
let a =  first.getAttribute("class")
console.log(a)
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("id"))
console.log(first.hasAttribute(".hey"))

first.setAttribute("class", "newClass are")
console.log(first.getAttribute("class"))
first.setAttribute("id", "newId")
console.log(newId.outerHTML)
// newId.setAttribute("hidden", "true")
let b= first.getAttribute("id")
console.log(b)

newId.removeAttribute("class")
console.log(newId.outerHTML)
console.log(newId.getAttribute("class"))
console.log(newId.hasAttribute("class"))
newId.setAttribute("class", "newcl")
console.log(newId.attributes)

console.log(newId.dataset)
console.log(newId.dataset.game)
console.log(newId.dataset.player)

// <div>
// <h1 id="first" class="hey" data-game="mama mario" data-player="Nigga imtiyaz" ><b>Inner HTML</b></h1>
// <p id="second" class="how">This is an example of inner HTML.</p>
// <button id="third" class="wtf" onclick="changeText()">Change Text</button>
// </div>