// 05 - Flow Control: if, else if and else

let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Multiple conditions
let marks = 75;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// Example: login decision
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome to the application");
} else {
    console.log("Please log in");
}
