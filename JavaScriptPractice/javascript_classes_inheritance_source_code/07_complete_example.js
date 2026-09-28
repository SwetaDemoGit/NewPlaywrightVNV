// 07 - Complete Example
// Combines class, constructor, methods, inheritance,
// super, getter and setter.

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }

    get employeeSalary() {
        return this.salary;
    }

    set employeeSalary(salary) {
        if (salary >= 0) {
            this.salary = salary;
        } else {
            console.log("Salary cannot be negative");
        }
    }
}

class Manager extends Employee {
    constructor(name, salary, teamSize) {
        super(name, salary);
        this.teamSize = teamSize;
    }

    showManagerDetails() {
        console.log("Manager:", this.name);
        console.log("Salary:", this.employeeSalary);
        console.log("Team Size:", this.teamSize);
    }
}

const manager1 = new Manager("Neha", 80000, 5);

manager1.showDetails();
manager1.showManagerDetails();

manager1.employeeSalary = 90000;

console.log("Updated Salary:", manager1.employeeSalary);
