// Function Declaration Hoisting
greet();

function greet() {
    console.log("Hello from a hoisted function declaration");
}

// const welcome = function () {
//     console.log("Welcome");
// };
// welcome();

// Calling a const function expression before initialization
// causes a ReferenceError:
//
// welcomeBeforeInitialization();

// const welcomeBeforeInitialization = function () {
//     console.log("Welcome");
// };

// console.log(a);
// var a = 10;
// console.log(a);

// calculateSquare(6);

// var calculateSquare = function (number) {
//     console.log(number * number);
// };

//With var, the variable is
//  hoisted and initialized with undefined.
