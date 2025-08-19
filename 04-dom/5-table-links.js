console.log(document.body.firstElementChild)

// if the element that you want is first child of the first child of body then use (document.body.firstElementChild.firstElementChild)
let t = document.body.firstElementChild 
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild.firstElementChild)
console.log(t.tFoot) 
console.log(t.tBodies)
console.log(t.tbody.rows)
console.log(t.rows[0])
console.log(t.rows[1])