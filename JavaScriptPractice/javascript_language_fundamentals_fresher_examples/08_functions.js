// 08 - Functions

// Function with no parameters
function greet() {
    console.log("Hello!");
}

greet();

// Function with one parameter
function greetStudent(name) {
    console.log("Hello " + name);
}

greetStudent("Rahul");
greetStudent("Priya");

// Function with multiple parameters
function add(a, b) {
    return a + b;
}



let result = add(10, 20);

console.log("Result:", result);

// Function for a practical calculation
function calculateTotal(price, quantity) {
    return price * quantity;
}

let total = calculateTotal(100, 3);

console.log("Total:", total);

// A function can be called multiple times
console.log(add(5, 10));
console.log(add(20, 30));

//function as expression
const multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4));
