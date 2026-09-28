// 03 - Inheritance and extends

// Example 1: Vehicle -> Car
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

const car1 = new Car();
car1.start();
car1.drive();


// Example 2: Person -> Employee
class Person {
    introduce() {
        console.log("I am a person");
    }
}

class Employee extends Person {
    work() {
        console.log("Employee is working");
    }
}

const employee1 = new Employee();
employee1.introduce();
employee1.work();


// Example 3: Animal -> Dog
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Dog is barking");
    }
}

const dog1 = new Dog();
dog1.eat();
dog1.bark();
