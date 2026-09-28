class Employee {
    constructor(
        public name: string,
        protected salary: number
    ) {}

    getSalary(): number {
        return this.salary;
    }
}

class Developer extends Employee {
    private bonus: number = 10000;

    getSalary(): number {
        return this.salary + this.bonus;
    }
}

let developer = new Developer("Rahul", 60000);

console.log(`Employee: ${developer.name}`);
console.log(`Salary: ${developer.getSalary()}`);
