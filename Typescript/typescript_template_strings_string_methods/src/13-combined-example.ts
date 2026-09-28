// Combining template strings and string methods

let firstName: string = "rahul";

let formattedName: string =
    firstName.toUpperCase();

let message: string =
    `Welcome ${formattedName}`;

console.log(message);
