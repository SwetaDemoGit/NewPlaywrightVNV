class Employee {
    static count: number = 0;

    constructor(public name: string) {
        Employee.count++;
    }
}

let employee1 = new Employee("Riya");
let employee2 = new Employee("Amit");
let employee3 = new Employee("Neha");
let employee4 = new Employee("Rahul");

console.log(`Total Employees: ${Employee.count}`);
