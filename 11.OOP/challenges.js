// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
    this.CarName = make;
    this.Speed = speed;
}

Car.prototype.accelrate = function () {
    console.log(`${this.CarName} going at ${this.Speed += 10}km/h`)
};
Car.prototype.break = function () {
    console.log(`${this.CarName} going at ${this.Speed -= 5}km/h`)
};

const car1 = new Car('BMW', 120)
console.log(car1)
car1.accelrate()
car1.break()


///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class iShowCar {
    constructor(make, speed) {
        this.CarName = make;
        this.Speed = speed;
    }

    accelrate() {
        console.log(`${this.CarName} going at ${this.Speed += 10}km/h`)
    }
    break() {
        console.log(`${this.CarName} going at ${this.Speed -= 5}km/h`)
    }
    get speedUS() {
        return this.Speed /= 1.6
    }
    set speedUS(speed) {
        this.Speed = speed * 1.6;
    }
}

const Car1 = new iShowCar('Ford', 120)
console.log(Car1)
console.log(Car1.speedUS)
Car1.speedUS = 50
console.log(Car1)


///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

function EV(make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)
EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(this)
}
EV.prototype.accelrate = function () {
    this.Speed += 20;
    this.charge -= 1;
    console.log(`${this.CarName} going at ${this.Speed} km/h, with a charge of ${this.charge}%`)
    console.log(this)
}

const car2 = new EV('Tesla', 120, 23)
console.log(car2);
car2.chargeBattery(90);
car2.break();
car2.accelrate(); // if there are two or more methods of same name in a prototype chain first occurance of same name method will be executed
//here child class overwrited the acceleration function inherited by parent








///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
