// TypeScript Beginner Demos
// Topics: Types, Type Assertions, Custom Object Types, Function Types
// ============================================================
// 1. BASIC TYPES
// ============================================================
// String
var studentName = "Rahul";
var city = "Delhi";
// Number
var age = 20;
var salary = 50000;
var price = 99.50;
// Boolean
var isStudent = true;
var isPassed = false;
console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);
// ============================================================
// 2. TYPE INFERENCE
// ============================================================
// TypeScript automatically understands the types here.
var nameWithInference = "Rahul"; // string
var ageWithInference = 20; // number
var passedWithInference = true; // boolean
console.log(nameWithInference, ageWithInference, passedWithInference);
// ============================================================
// 3. TYPE ASSERTION
// ============================================================
// We are telling TypeScript that the value is a string.
var value = "Hello";
var text = value;
console.log("Uppercase:", text.toUpperCase());
console.log("Length:", value.length);
// IMPORTANT:
// Type assertion does NOT convert a value.
var stringNumber = "100";
var assumedNumber = stringNumber;
console.log("Value after assertion:", assumedNumber);
// The actual value is still the string "100".
// Actual conversion:
var convertedNumber = Number(stringNumber);
console.log("Actual converted number:", convertedNumber);
var student1 = {
    name: "Rahul",
    age: 20
};
var student2 = {
    name: "Neha",
    age: 21
};
console.log("Student 1:", student1);
console.log("Student 2:", student2);
var employee1 = {
    id: 101,
    name: "Amit",
    salary: 50000
};
var employee2 = {
    id: 102,
    name: "Neha",
    salary: 60000
};
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
var student3 = {
    name: "Rahul",
    marks: [80, 90, 70]
};
console.log("Student marks:", student3.marks);
// ============================================================
// 8. ARRAY OF OBJECTS
// ============================================================
var students = [
    {
        name: "Rahul",
        age: 20
    },
    {
        name: "Neha",
        age: 21
    },
    {
        name: "Amit",
        age: 22
    }
];
students.forEach(function (student) {
    console.log(student.name, student.age);
});
// ============================================================
// 9. FUNCTION PARAMETER TYPES
// ============================================================
function add(a, b) {
    return a + b;
}
console.log("Add:", add(10, 20));
// ============================================================
// 10. MORE SIMPLE FUNCTIONS
// ============================================================
function multiply(a, b) {
    return a * b;
}
function greet(name) {
    return "Hello " + name;
}
function displayMessage(message) {
    console.log(message);
}
console.log("Multiply:", multiply(5, 10));
console.log(greet("Rahul"));
displayMessage("Hello Students");
// ============================================================
// 11. FUNCTION ACCEPTING A CUSTOM OBJECT TYPE
// ============================================================
function displayStudent(student) {
    console.log("Student Name:", student.name);
    console.log("Student Age:", student.age);
}
displayStudent(student1);
// ============================================================
// 12. FUNCTION TYPE
// ============================================================
// calculate must contain a function that:
// - accepts two numbers
// - returns a number
var calculate;
calculate = function (a, b) {
    return a + b;
};
console.log("Calculate - Add:", calculate(10, 20));
// We can assign another function with the same structure.
calculate = function (a, b) {
    return a * b;
};
console.log("Calculate - Multiply:", calculate(10, 20));
// ============================================================
// 13. FUNCTION TYPE - SIMPLE EXAMPLE
// ============================================================
var subtract;
subtract = function (a, b) {
    return a - b;
};
console.log("Subtract:", subtract(20, 5));
var product = {
    id: 1,
    name: "Laptop",
    price: 50000
};
function displayProduct(product) {
    console.log("Product ID:", product.id);
    console.log("Product Name:", product.name);
    console.log("Product Price:", product.price);
}
displayProduct(product);
