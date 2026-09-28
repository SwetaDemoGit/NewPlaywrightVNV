// TypeScript - Spread and Rest Operators
// Beginner-friendly examples

// ============================================================
// 1. SPREAD OPERATOR WITH ARRAYS
// ============================================================

let numbers = [10, 20, 30];

let newNumbers = [...numbers];

console.log("Copied array:", newNumbers);


// ============================================================
// 2. COMBINING TWO ARRAYS
// ============================================================

let fruits = ["Apple", "Banana"];
let vegetables = ["Carrot", "Potato"];

let food = [...fruits, ...vegetables];

console.log("Combined array:", food);


// ============================================================
// 3. ADDING VALUES TO AN ARRAY USING SPREAD
// ============================================================

let numbers2 = [20, 30, 40];

let newNumbers2 = [10, ...numbers2, 50];

console.log("Array with added values:", newNumbers2);


// ============================================================
// 4. COPYING AN ARRAY
// ============================================================

let original = [10, 20, 30];
let copy = [...original];

copy.push(40);

console.log("Original:", original);
console.log("Copy:", copy);


// ============================================================
// 5. SPREAD OPERATOR WITH OBJECTS
// ============================================================

let student = {
    name: "Rahul",
    age: 22
};

let newStudent = {
    ...student
};

console.log("Copied student:", newStudent);


// ============================================================
// 6. ADDING PROPERTIES TO AN OBJECT
// ============================================================

let updatedStudent = {
    ...student,
    city: "Delhi"
};

console.log("Updated student:", updatedStudent);


// ============================================================
// 7. UPDATING AN OBJECT PROPERTY
// ============================================================

let updatedStudentAge = {
    ...student,
    age: 23
};

console.log("Student with updated age:", updatedStudentAge);
console.log("Original student:", student);


// ============================================================
// 8. REST OPERATOR WITH FUNCTIONS
// ============================================================

function showNumbers(...numbers: number[]): void {
    console.log("Numbers received:", numbers);
}

showNumbers(10, 20, 30);


// ============================================================
// 9. REST OPERATOR - CALCULATE TOTAL
// ============================================================

function add(...numbers: number[]): number {
    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log("Total:", add(10, 20));
console.log("Total:", add(10, 20, 30));
console.log("Total:", add(10, 20, 30, 40));


// ============================================================
// 10. REST WITH A NORMAL PARAMETER
// ============================================================

function introduce(name: string, ...hobbies: string[]): void {
    console.log("Name:", name);
    console.log("Hobbies:", hobbies);
}

introduce("Rahul", "Cricket", "Music", "Reading");


// ============================================================
// HANDS-ON EXERCISES
// ============================================================

// Exercise 1 - Combine Arrays
// Create fruits and vegetables arrays and combine them using Spread.

// Exercise 2 - Add Values Using Spread
// Given [20, 30, 40], create [10, 20, 30, 40, 50] using Spread.

// Exercise 3 - Copy an Array
// Copy [10, 20, 30, 40] using Spread and add 50 only to the copy.

// Exercise 4 - Object Spread
// Create an employee object and create a new object with department: "IT".

// Exercise 5 - Update Object
// Create a product object and create a new object with an updated price.

// Exercise 6 - Rest Operator
// Create calculateTotal(...numbers) that returns the total.

// Exercise 7 - Rest with a Parameter
// Create introduce(name, ...hobbies) and print the name and hobbies.
