let b = document.body
console.log("first child of b is : ", b.firstChild)
console.log("first element child of b is : ", b.firstElementChild)

const ChangeFont =()=>{
    b.firstElementChild.style.color = "red"
}

ChangeFont()