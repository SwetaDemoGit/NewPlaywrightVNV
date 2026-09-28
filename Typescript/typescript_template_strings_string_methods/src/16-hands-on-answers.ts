// TypeScript — Template Strings & String Methods
// Hands-on Answers

// Exercise 1 — Template String
let name1: string = "Anita";
let age1: number = 22;

let message1: string =
    `My name is ${name1} and I am ${age1} years old.`;

console.log("Exercise 1:", message1);


// Exercise 2 — Convert to Uppercase
let city2: string = "bangalore";

console.log("Exercise 2:", city2.toUpperCase());


// Exercise 3 — Convert to Lowercase
let country3: string = "INDIA";

console.log("Exercise 3:", country3.toLowerCase());


// Exercise 4 — Remove Extra Spaces
let username4: string = "   Rahul   ";

console.log("Exercise 4:", username4.trim());


// Exercise 5 — Check Email
let email5: string = "student@gmail.com";

console.log("Exercise 5:", email5.includes("@"));


// Exercise 6 — Check File Extension
let fileName6: string = "assignment.pdf";

console.log("Exercise 6:", fileName6.endsWith(".pdf"));


// Exercise 7 — Extract Text
let message7: string = "Hello TypeScript";

console.log("Exercise 7:", message7.slice(0, 5));


// Exercise 8 — Replace Text
let message8: string = "Welcome Rahul";

let result8: string =
    message8.replace("Rahul", "Anita");

console.log("Exercise 8:", result8);


// Exercise 9 — User Profile
let name9: string = "rahul";
let city9: string = "mumbai";

let message9: string = `
User: ${name9.toUpperCase()}
City: ${city9.toUpperCase()}
`;

console.log("Exercise 9:", message9);


// Exercise 10 — Shopping Message
let product10: string = "Laptop";
let price10: number = 50000;
let quantity10: number = 2;

let total10: number =
    price10 * quantity10;

let message10: string =
    `You purchased ${product10}. Total amount: ${total10}`;

console.log("Exercise 10:", message10);
