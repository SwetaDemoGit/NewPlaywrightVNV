// 09 - Arrow Functions

// Traditional function
function addTraditional(a, b) {
    return a + b;
}

console.log(addTraditional(10, 20));

// Arrow function with multiple parameters
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));

// Arrow function with implicit return
const square = number => number * number;

console.log(square(5));

const add1 = (a, b) => a + b;

console.log(add(10, 20));

// Arrow function with one parameter
const greet = name => {
    console.log("Hello " + name);
};

greet("Sonal");

// Arrow functions are a concise way to write functions.

const checkNumber = number => {

    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }

};


console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

//func calling other fucntions
function square(number) {
    return number * number;
}

function calculateTotal(number1, number2) {

    let result1 = square(number1);
    let result2 = square(number2);

    return result1 + result2;
}

console.log(calculateTotal(3, 4));

//fucntion with default parameters
function greetStudent(name = "Student") {
    console.log("Hello " + name);
}

greetStudent("John");
greetStudent();