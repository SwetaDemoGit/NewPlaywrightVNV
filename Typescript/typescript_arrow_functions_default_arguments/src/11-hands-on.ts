// TypeScript — Arrow Functions & Default Arguments
// Hands-on Answers

// 1. Add Numbers
const addNumbers = (a: number, b: number): number => {
    return a + b;
};

console.log("1.", addNumbers(10, 20));


// 2. Square
const findSquare = (number: number): number => {
    return number * number;
};

console.log("2.", findSquare(6));


// 3. Greeting
const greeting = (name: string = "Guest"): string => {
    return `Hello, ${name}`;
};

console.log("3.", greeting("Anita"));
console.log("3.", greeting());


// 4. Calculate Total
const total = (price: number, quantity: number = 1): number => {
    return price * quantity;
};

console.log("4.", total(200));
console.log("4.", total(200, 3));


// 5. Find the Error
// The error is that the function expects numbers,
// but strings are passed.
//
// const result = addNumbers("10", "20");

// Correct:
const result = addNumbers(10, 20);
console.log("5.", result);


// 6. Employee Greeting
const employeeGreeting = (
    name: string,
    department: string = "General"
): string => {
    return `${name} works in ${department} department`;
};

console.log("6.", employeeGreeting("Rahul"));
console.log("6.", employeeGreeting("Priya", "IT"));


// 7. Shopping Cart Challenge
const shoppingTotal = (
    price: number,
    quantity: number = 1
): number => {
    return price * quantity;
};

console.log("7.", shoppingTotal(500));
console.log("7.", shoppingTotal(500, 4));
