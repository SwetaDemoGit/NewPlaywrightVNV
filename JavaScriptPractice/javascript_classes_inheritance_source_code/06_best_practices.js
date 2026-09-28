// 06 - Best Practices in Classes and Inheritance

// 1. Keep classes focused.
// This class has responsibilities related to an employee.
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}


// 2. Use meaningful class names.
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    showBalance() {
        console.log("Balance:", this.balance);
    }
}


// 3. Use inheritance when there is a real "is-a" relationship.
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

const car = new Car();
car.start();
car.drive();


// 4. Reuse common functionality in the superclass.
class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

class Cat extends Animal {
    meow() {
        console.log("Cat says meow");
    }
}

const cat = new Cat();
cat.eat();
cat.meow();


// 5. Avoid unnecessarily deep inheritance chains.
// Prefer simple, easy-to-understand relationships.
