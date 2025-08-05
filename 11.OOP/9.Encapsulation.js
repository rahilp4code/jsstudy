//Encapsulation : Private fields (property are called field i other languages ) And Peivate Methods

// 1) private fields
// 1) public fields
// 1) private methods
// 1) public methods
// STATIC version of this 

//read classes example before starting this lec

class Account {
    //Public fields are added here before constructor, dont need this key
    locale = navigator.language;
    bank = 'Finverse';

    //private fields (add # before)( meaning data cannot be accessed so that it cannot ne read or mutated)
    #movements = [];
    #pin; // this is the variable we want to get through parameter

    static idc = 'idc';

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin; // here how its done
        console.log(`Thanks for opening an account, ${owner}`);
    }

    // Public interface (api) 
    // Public Methods

    getMov() {
        return this.#movements
        // cant be chainned coz return is used already
    }

    deposit(val) {
        this.#movements.push(val); // # is added because we made it private
        return this
    }

    withdraw(val) {
        this.deposit(-val);
        return this
    }


    // creating private method is similar to private fileds jsut add #
    #approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val);
            console.log(`Loan approved`);
        }
        return this
    }

    static test() { console.log('hello') }
    static #test2() { console.log('hello2') }
}

const acc1 = new Account('Rahil', 'INR', 1111);
console.log(acc1);
acc1.deposit(1000);
acc1.withdraw(10);
console.log(acc1.movements) // undefined
// console.log(acc1.#movements) // private error
// console.log(acc1.#pin) // private error
// acc1.#approveLoan()// private 
Account.test();
// Account.#test(); // private error

console.log(acc1.getMov()) // private fields can be logged using methods who return them 


//Chaining Methods of classes

// to chain the classes methods which u r should return 'this keyword' so that the chainning look like this eg. aac1.aac1.acc1.. meaning next method has an object to work on and then return its obj name for next method to work

let movements = acc1.deposit(7543).deposit(3425).withdraw(5789).withdraw(1000).requestLoan(20000).getMov();

console.log(movements) // methods which arnt chainnable should be used last so acc1.method works