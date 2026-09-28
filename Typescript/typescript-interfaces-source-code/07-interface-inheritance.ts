// Interface Inheritance

interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
  work(): void;
}

const employee: Employee = {
  name: "John",
  employeeId: 101,

  work(): void {
    console.log(`${this.name} is working`);
  }
};

console.log(employee);
employee.work();
