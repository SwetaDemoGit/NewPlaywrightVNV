// 11 - Practice Exercises
// Try solving these exercises yourself.
// Do not look at the answer immediately.

// Exercise 1:
// Create a variable called studentName and store your name.
// Print it.

// Exercise 2:
// Create two number variables and calculate their sum.

// Exercise 3:
// Create a variable called age.
// If age is 18 or above, print "Adult"; otherwise print "Minor".

// Exercise 4:
// Create a variable called marks.
// Print:
// A for 90 or above
// B for 75-89
// C for 60-74
// D below 60

// Exercise 5:
// Use a for loop to print numbers from 1 to 10.

// Exercise 6:
// Create a function called multiply that accepts two numbers
// and returns their product.

// Exercise 7:
// Rewrite the multiply function as an arrow function.

// Exercise 8:
// Create a const object called employee with:
// name
// department
// salary
// Print the object.

// Exercise 9:
// Create an array containing five fruits.
// Print the first fruit.

// Exercise 10:
// Create a loop that prints numbers from 1 to 10,
// but skips number 5.

// ------------------------------
// Sample answers
// ------------------------------

const studentName = "Rahul";
console.log("Exercise 1:", studentName);

const number1 = 10;
const number2 = 20;
console.log("Exercise 2:", number1 + number2);

const age = 20;

if (age >= 18) {
    console.log("Exercise 3: Adult");
} else {
    console.log("Exercise 3: Minor");
}

const marks = 82;

if (marks >= 90) {
    console.log("Exercise 4: A");
} else if (marks >= 75) {
    console.log("Exercise 4: B");
} else if (marks >= 60) {
    console.log("Exercise 4: C");
} else {
    console.log("Exercise 4: D");
}

for (let i = 1; i <= 10; i++) {
    console.log("Exercise 5:", i);
}

function multiply(a, b) {
    return a * b;
}

console.log("Exercise 6:", multiply(5, 4));

const multiplyArrow = (a, b) => a * b;

console.log("Exercise 7:", multiplyArrow(5, 4));

const employee = {
    name: "Priya",
    department: "IT",
    salary: 50000
};

console.log("Exercise 8:", employee);

const fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes"];

console.log("Exercise 9:", fruits[0]);

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }

    console.log("Exercise 10:", i);
}
