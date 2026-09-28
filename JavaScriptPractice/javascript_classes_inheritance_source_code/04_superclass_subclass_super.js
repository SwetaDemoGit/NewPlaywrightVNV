// 04 - Superclass, Subclass and super()

// Vehicle is the superclass.
// Car is the subclass.

class Person {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {
    constructor(name, salary) {
        super(name); // Calls the parent constructor
        this.salary = salary;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

const employee1 = new Employee("Ravi", 50000);
employee1.showDetails();


// Another simple example
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name, "is eating");
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    showBreed() {
        console.log("Breed:", this.breed);
    }
}

const dog1 = new Dog("Bruno", "Labrador");
dog1.eat();
dog1.showBreed();
