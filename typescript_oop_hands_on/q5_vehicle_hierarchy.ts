class Vehicle {
    start(): void {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    start(): void {
        console.log("Car engine started");
    }
}

class Bike extends Vehicle {
    start(): void {
        console.log("Bike engine started");
    }
}

let car = new Car();
let bike = new Bike();

car.start();
bike.start();
