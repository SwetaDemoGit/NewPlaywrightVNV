class Employee {
    constructor(public name: string) {}

    work(): void {
        console.log("Employee is working");
    }
}

class Manager extends Employee {
    work(): void {
        console.log("Manager is managing the team");
    }
}

let manager = new Manager("Riya");
manager.work();
