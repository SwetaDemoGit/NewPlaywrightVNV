// Function Expression
//A function expression is a function assigned to a variable.
const greet = function () {
    console.log("Hello");
};
greet();

const multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 4));

const sayHello = function sayHelloMessage() {
    console.log("Hello from a named function expression");
};
sayHello();
