console.log(document.body.firstChild)
console.log(document.body.lastChild)
// console.log(document.body.childNodes)

// creating array of children

let children = Array.from(document.body.childNodes)

console.log(children)

children.forEach((child) => {
    console.log(child.nodeName)
})