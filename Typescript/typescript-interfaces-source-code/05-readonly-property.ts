// Readonly Property

interface Employee {
  readonly id: number;
  name: string;
}

const employee: Employee = {
  id: 101,
  name: "John"
};

employee.name = "Alex";

// This will give a TypeScript error:
 //employee.id = 102;

console.log(employee);
