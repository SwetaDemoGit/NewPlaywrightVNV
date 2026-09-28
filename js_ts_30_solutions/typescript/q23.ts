// Q23. Employee Salary
class Employee {
  private salary: number = 0;

  setSalary(amount: number): void {
    if (amount < 0) {
      throw new Error("Salary cannot be negative");
    }

    this.salary = amount;
  }

  getSalary(): number {
    return this.salary;
  }
}

const employee = new Employee();
employee.setSalary(50000);

console.log(employee.getSalary());

// employee.salary = 100000; // Error: salary is private
