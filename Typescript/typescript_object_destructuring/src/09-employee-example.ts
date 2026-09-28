// Real-world example: Employee

// Create an employee object
let employee = {
    name: "Neha",
    department: "Testing",
    salary: 55000
};

// Destructure the employee object
// Get name, department, and salary directly from the object
let { name, department, salary } = employee;

// Display the employee's name
console.log(`Employee: ${name}`);

// Display the employee's department
console.log(`Department: ${department}`);

// Display the employee's salary
console.log(`Salary: ${salary}`);