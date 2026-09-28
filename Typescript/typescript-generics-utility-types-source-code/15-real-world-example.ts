interface Employee {
  id: number;
  name: string;
  department: string;
  salary: number;
}

const employee: Employee = {
  id: 101,
  name: "John",
  department: "IT",
  salary: 50000
};

const update: Partial<Employee> = {
  salary: 60000
};

type PublicEmployee = Omit<Employee, "salary">;

const publicEmployee: PublicEmployee = {
  id: 101,
  name: "John",
  department: "IT"
};

type EmployeeBasic = Pick<Employee, "id" | "name">;

const basicEmployee: EmployeeBasic = {
  id: 101,
  name: "John"
};

console.log(employee);
console.log(update);
console.log(publicEmployee);
console.log(basicEmployee);
