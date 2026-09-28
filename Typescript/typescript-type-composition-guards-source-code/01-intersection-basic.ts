interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type EmployeeDetails = Person & Employee;

const employee: EmployeeDetails = {
  name: "John",
  employeeId: 101
};

console.log(employee);
