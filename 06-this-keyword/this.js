// example..

const user1 = {
    name: "Rahil",
    greet() {
        console.log("Hi, I'm " + this.name); // 'this' refers to 'user'
    }
};

user.greet(); // Hi, I'm Rahil


//example1


function showThis() {
    console.log(this);
}

showThis();
//✅ Answer: In strict mode, this will be undefined. In non-strict mode, it will be the global object (window in browsers, global in Node.js).

//example2

const user = {
    name: "Rahil",
    greet() {
        console.log(this.name);
    }
};

user.greet();
//✅ Answer: Rahil Because this refers to the user object.


//example3

const person = {
    name: "Rahil",
    sayHi() {
        function inner() {
            console.log(this.name);
        }
        inner();
    }
};

person.sayHi();
//❌ Answer: undefined Because this inside inner() is in global scope. It's not bound to the person object

//example4

const person1 = {
    name: "Rahil",
    sayHi() {
        const inner = () => {
            console.log(this.name);
        };
        inner();
    }
};
person1.sayHi();

//✅ Answer: Rahil Because arrow functions don’t have their own this—they use this from the outer function (sayHi()).

//example5

const obj = {
    name: "Test",
    greet: () => {
        console.log(this.name);
    }
};

obj.greet();

//❌ Answer: undefined Because arrow functions don't bind their own this, and here this refers to the global object, not obj.

