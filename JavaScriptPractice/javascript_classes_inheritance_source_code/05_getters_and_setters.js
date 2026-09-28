// 05 - Getters and Setters

// Example 1: Student age validation
class Student {
    constructor(age) {
        this.age = age;
    }

    set studentAge(age) {
        if (age >= 5) {
            this.age = age;
        } else {
            console.log("Invalid age");
        }
    }

    get studentAge() {
        return this.age;
    }
}

const student1 = new Student(20);

student1.studentAge = 50;
console.log("Age:", student1.studentAge);


// Example 2: Product price validation
class Product {
    constructor(price) {
        this.price = price;
    }

    set productPrice(price) {
        if (price > 0) {
            this.price = price;
        } else {
            console.log("Price must be greater than 0");
        }
    }

    get productPrice() {
        return this.price;
    }
}

const product1 = new Product(1000);

product1.productPrice = 2500;
console.log("Price:", product1.productPrice);


// Example 3: Employee salary
class Employee {
    constructor(salary) {
        this.salary = salary;
    }

    set employeeSalary(salary) {
        if (salary >= 0) {
            this.salary = salary;
        }
    }

    get employeeSalary() {
        return this.salary;
    }
}

const emp1 = new Employee(50000);

console.log("Salary:", emp1.employeeSalary);

emp1.employeeSalary = 60000;

console.log("Updated Salary:", emp1.employeeSalary);
