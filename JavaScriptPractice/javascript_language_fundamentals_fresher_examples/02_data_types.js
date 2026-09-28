// 02 - Data Types in JavaScript

// Primitive data types

let age = 25;                         // Number
let name = "Rahul";                   // String
let isStudent = true;                 // Boolean
let address;                          // Undefined
let selectedProduct = null;           // Null
let largeNumber = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id");          // Symbol

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof address);
console.log(typeof selectedProduct);
console.log(typeof largeNumber);
console.log(typeof uniqueId);

// Non-primitive examples

let student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript"
};

let fruits = ["Apple", "Mango", "Orange"];

console.log(student);
console.log(fruits);


// Array values are accessed using indexes.
// The first element has index 0.
console.log(fruits[0]);

function greetMessage(){
    console.log("Hello javascript!!")
}

greetMessage()
