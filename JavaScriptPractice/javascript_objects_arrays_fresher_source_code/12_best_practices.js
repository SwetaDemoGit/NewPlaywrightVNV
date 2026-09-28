// 12 - Best Practices for Objects and Arrays

// 1. Use const when the variable itself does not need reassignment.
const employees = [
    {
        name: "Rahul",
        department: "IT"
    }
];

// 2. Use meaningful names.
const activeEmployees = employees;

// Avoid unclear names such as:
// const x = employees;

// 3. Keep object properties related to the same entity.
const product = {
    name: "Laptop",
    price: 75000,
    category: "Electronics"
};

// 4. Keep arrays focused on one logical collection.
const employeeNames = ["Rahul", "Priya", "Amit"];

// 5. Prefer map() when transforming every element.
const upperCaseNames = employeeNames.map(
    name => name.toUpperCase()
);

console.log(upperCaseNames);

// 6. Prefer filter() when selecting elements.
const itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log(itEmployees);

// 7. Avoid unnecessary mutation.
// Instead of changing an array when you only need a transformed result,
// consider map() or filter().

// 8. Keep functions that process objects and arrays small and focused.

function getEmployeeNames(employeeList) {
    return employeeList.map(employee => employee.name);
}

console.log(getEmployeeNames(employees));

// 9. Do not overuse nested objects and arrays.
// Keep data structures understandable.

// 10. Use consistent naming conventions.
// Arrays often use plural names:
// employees, products, students
//
// A single object often uses singular names:
// employee, product, student
