// 04 - Operators and Assignments

let a = 10;
let b = 3;

// Arithmetic operators
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Remainder:", a % b);
console.log("Exponent:", a ** b);

// Assignment
let score = 100;
console.log("Initial score:", score);

score += 20; // score = score + 20
console.log("After +=:", score);

score -= 10; // score = score - 10
console.log("After -=:", score);

// Comparison
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a === 10:", a === 10);
console.log("a !== b:", a !== b);

// Strict equality checks both value and type
console.log(5 === 5);       // true
console.log(5 === "5");     // false

// Logical operators
let age = 20;
let hasLicense = true;

console.log(age >= 18 && hasLicense); // AND
console.log(age >= 18 || hasLicense); // OR
console.log(!hasLicense);             // NOT

// Increment and decrement
let count = 5;
count++;
console.log("After increment:", count);

count--;
console.log("After decrement:", count);
