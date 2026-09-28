// Public Properties and Methods
// JavaScript class members are public by default.

class Employee {
    name = "Rahul";
    salary = 50000;

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.salary}`);
    }
}

const employee = new Employee();

employee.showDetails();

// Public members can be accessed outside the class.
console.log(employee.name);
console.log(employee.salary);
