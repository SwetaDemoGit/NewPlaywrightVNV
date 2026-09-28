// 02 - Constructors and Methods

// Example 1: Student
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

const student1 = new Student("Amit", 20);
student1.showDetails();


// Example 2: Employee
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showSalary() {
        console.log(this.name, "earns", this.salary);
    }
}

const emp1 = new Employee("Ravi", 50000);
emp1.showSalary();


// Example 3: Bank Account
class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    showBalance() {
        console.log("Balance:", this.balance);
    }
}

const account1 = new BankAccount("ACC101", 10000);
account1.showBalance();
