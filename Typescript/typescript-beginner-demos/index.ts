// TypeScript Beginner Demos
// Topics: Types, Type Assertions, Custom Object Types, Function Types

// ============================================================
// 1. BASIC TYPES
// ============================================================

// String
let studentName: string = "Rahul";
let city: string = "Delhi";

// Number
let age: number = 20;
let salary: number = 50000;
let price: number = 99.50;

// Boolean
let isStudent: boolean = true;
let isPassed: boolean = false;

console.log("Name:", studentName);
console.log("Age:", age);
console.log("Is Student:", isStudent);


// ============================================================
// 2. TYPE INFERENCE
// ============================================================

// TypeScript automatically understands the types here.
let nameWithInference = "Rahul"; // string
let ageWithInference = 20;       // number
let passedWithInference = true;  // boolean

console.log(nameWithInference, ageWithInference, passedWithInference);


// ============================================================
// 3. TYPE ASSERTION
// ============================================================

// We are telling TypeScript that the value is a string.
let value: unknown = "Hello";
let text = value as string;

console.log("Uppercase:", text.toUpperCase());
console.log("Length:", (value as string).length);

// IMPORTANT:
// Type assertion does NOT convert a value.
let stringNumber: unknown = "100";
let assumedNumber = stringNumber as number;

console.log("Value after assertion:", assumedNumber);
// The actual value is still the string "100".

// Actual conversion:
let convertedNumber = Number(stringNumber);
console.log("Actual converted number:", convertedNumber);


// ============================================================
// 4. TYPE ASSERTION WITH HTML ELEMENT
// ============================================================

// This example is for browser projects.
// HTML needed:
// <input id="username">

// Uncomment when running in a browser with the above HTML.
// const input = document.getElementById("username") as HTMLInputElement;
// console.log(input.value);


// ============================================================
// 5. CUSTOM OBJECT TYPE
// ============================================================

type Student = {
    name: string;
    age: number;
};

let student1: Student = {
    name: "Rahul",
    age: 20
};

let student2: Student = {
    name: "Neha",
    age: 21
};

console.log("Student 1:", student1);
console.log("Student 2:", student2);


// ============================================================
// 6. EMPLOYEE CUSTOM TYPE
// ============================================================

type Employee = {
    id: number;
    name: string;
    salary: number;
};

let employee1: Employee = {
    id: 101,
    name: "Amit",
    salary: 50000
};

let employee2: Employee = {
    id: 102,
    name: "Neha",
    salary: 60000
};

console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);


// ============================================================
// 7. CUSTOM TYPE WITH ARRAY
// ============================================================

type StudentWithMarks = {
    name: string;
    marks: number[];
};

let student3: StudentWithMarks = {
    name: "Rahul",
    marks: [80, 90, 70]
};

console.log("Student marks:", student3.marks);


// ============================================================
// 8. ARRAY OF OBJECTS
// ============================================================

let students: Student[] = [
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

students.forEach((student) => {
    console.log(student.name, student.age);
});


// ============================================================
// 9. FUNCTION PARAMETER TYPES
// ============================================================

function add(a: number, b: number): number {
    return a + b;
}

console.log("Add:", add(10, 20));


// ============================================================
// 10. MORE SIMPLE FUNCTIONS
// ============================================================

function multiply(a: number, b: number): number {
    return a * b;
}

function greet(name: string): string {
    return "Hello " + name;
}

function displayMessage(message: string): void {
    console.log(message);
}

console.log("Multiply:", multiply(5, 10));
console.log(greet("Rahul"));
displayMessage("Hello Students");


// ============================================================
// 11. FUNCTION ACCEPTING A CUSTOM OBJECT TYPE
// ============================================================

function displayStudent(student: Student): void {
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
let calculate: (a: number, b: number) => number;

calculate = (a, b) => {
    return a + b;
};

console.log("Calculate - Add:", calculate(10, 20));

// We can assign another function with the same structure.
calculate = (a, b) => {
    return a * b;
};

console.log("Calculate - Multiply:", calculate(10, 20));


// ============================================================
// 13. FUNCTION TYPE - SIMPLE EXAMPLE
// ============================================================

let subtract: (a: number, b: number) => number;

subtract = (a, b) => {
    return a - b;
};

console.log("Subtract:", subtract(20, 5));


// ============================================================
// 14. COMBINED EXAMPLE
// ============================================================

type Product = {
    id: number;
    name: string;
    price: number;
};

let product: Product = {
    id: 1,
    name: "Laptop",
    price: 50000
};

function displayProduct(product: Product): void {
    console.log("Product ID:", product.id);
    console.log("Product Name:", product.name);
    console.log("Product Price:", product.price);
}

displayProduct(product);
