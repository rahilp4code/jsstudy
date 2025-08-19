// matches, closest and contains methods
let id1= document.getElementById("id1");
let sp1= document.getElementById("sp1");

// matches() method

console.log(id1.matches("#id1")); // true
console.log(id1.matches("#xlass")); // false
console.log(id1.matches(".class")); // false
console.log(id1.matches(".box")); // true

// closest() method

console.log(sp1.closest("#id1")); 
console.log(sp1.closest(".box")); 
console.log(sp1.closest("#id2")); 
console.log(sp1.closest(".box2")); 


// contains() method

console.log(id1.contains(sp1)); // true
console.log(sp1.contains(sp1)); // true
console.log(sp1.contains(id1)); // false

