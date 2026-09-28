// 07 - Objects and Arrays Together

// Real applications commonly use arrays of objects.

const employees = [
    {
        name: "Rahul",
        department: "IT",
        salary: 50000
    },
    {
        name: "Priya",
        department: "HR",
        salary: 55000
    },
    {
        name: "Amit",
        department: "IT",
        salary: 65000
    }
];

console.log(employees);

// Accessing one object
console.log(employees[0].name);

// forEach over an array of objects
employees.forEach(employee => {
    console.log(employee.name, employee.department);
});

// map: get only employee names
const employeeNames = employees.map(employee => employee.name);

console.log(employeeNames);

// filter: find employees from IT
const itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log(itEmployees);

// filter by salary
const highSalaryEmployees = employees.filter(
    employee => employee.salary > 55000
);

console.log(highSalaryEmployees);
