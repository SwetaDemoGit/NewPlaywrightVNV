class Employee {
    static employeeCount: number = 0;

    constructor(
        public name: string,
        private salary: number
    ) {
        Employee.employeeCount++;
    }

    getSalary(): number {
        return this.salary;
    }

    work(): void {
        console.log("Employee is working");
    }
}

class Developer extends Employee {
    work(): void {
        console.log("Developer is coding");
    }
}

class Manager extends Employee {
    work(): void {
        console.log("Manager is managing the team");
    }
}

let developer1 = new Developer("Riya", 60000);
let developer2 = new Developer("Amit", 65000);
let manager = new Manager("Neha", 80000);

developer1.work();
developer2.work();
manager.work();

console.log(`Total Employees: ${Employee.employeeCount}`);
