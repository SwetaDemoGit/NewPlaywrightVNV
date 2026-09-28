// Type inference
let city = "Mumbai";
let marks = 85;
let passed = true;

console.log(city);
console.log(marks);
console.log(passed);

// TypeScript automatically infers:
// city   -> string
// marks  -> number
// passed -> boolean

// Uncomment these lines to see type errors:
// city = 100;
// marks = "90";
// passed = "yes";
