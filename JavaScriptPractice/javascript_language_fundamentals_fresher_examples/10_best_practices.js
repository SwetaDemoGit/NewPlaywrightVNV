// 10 - Best Practices in JavaScript Fundamentals

// 1. Prefer const when reassignment is not needed
const companyName = "ABC Technologies";

// 2. Use let when a value needs to change
let counter = 0;
counter++;
counter++;

// 3. Use meaningful variable names
const employeeSalary = 50000;
const employeeDepartment = "IT";

// Avoid unclear names such as:
// let x = 50000;
// let y = "IT";

// 4. Prefer strict equality
if (counter === 2) {
    console.log("Counter is 2");
}

// 5. Keep functions focused
function calculateTax(amount, rate) {
    return amount * rate;
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTax(1000, 0.10));
console.log(calculateTotal(100, 3));

// 6. Avoid unnecessary global variables.
// Keep variables within an appropriate scope.

// 7. Avoid repeating the same logic.
// Put reusable logic into functions.

// 8. Use consistent naming conventions.
// JavaScript commonly uses camelCase for variables and functions.

const firstName = "Rahul";
const totalPrice = 500;

function getUserDetails() {
    console.log("Getting user details");
}

console.log(companyName, employeeSalary, employeeDepartment);
getUserDetails();
