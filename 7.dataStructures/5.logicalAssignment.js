const rest1 = {
    name: 'BCA chaiWala',
    customer: 10,
    customer: 0 // or considers 0 as false use nullish
}

const rest2 = {
    name: 'MCA chaiWala',
    owner: 'Xyz',
}

// rest1.customer = rest1.customer || 20
// rest2.customer = rest2.customer || 20

// console.log(rest1)
// console.log(rest2)

// or assingment

// rest1.customer ||= 0;
// rest2.customer ||= 20;

// console.log(rest1)
// console.log(rest2)

// nullish assignment

rest2.customer ??= 20;
rest1.customer ??= 0;


console.log(rest1)
console.log(rest2)

// AND Assignment

// rest2.owner = rest2.owner && "<Anonymous>"
// rest1.owner = rest1.owner && "<Anonymous>" // assings anyway
// rest1.owner &&= '<Anonymous>' // assings if the value is truthy
// rest2.owner &&= '<Anonymous>'
// console.log(rest1)
// console.log(rest2)

