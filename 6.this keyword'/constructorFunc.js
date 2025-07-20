// Construction Function



function Car(brand) {
    this.brand = brand;
    this.getBrand = function () {
        console.log(this.brand);
    };
}

const myCar = new Car("Toyota");
// const myCar = Car("Toyota"); // ⚠️ Wrong
myCar.getBrand();


//way 1 of crasting obj
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 42
};

//way 2 of creating obj
const car = new Object();
car.make = "Toyota";
car.model = "Camry";