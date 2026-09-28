// Validating Data with Regular Expressions


// Username validation
// ^                → start of the string
// [A-Za-z0-9]      → allows uppercase letters, lowercase letters, and numbers
// {5,10}           → username must contain 5 to 10 characters
// $                → end of the string
const usernamePattern = /^[A-Za-z0-9]{5,10}$/;


// "user123" contains only letters/numbers and has 7 characters
// Therefore, the result is true
console.log("Username:", usernamePattern.test("user123")); // true


// "abc" contains only letters, but it has only 3 characters
// Minimum required is 5 characters
// Therefore, the result is false
console.log("Username:", usernamePattern.test("abc")); // false


// "user@123" contains @, which is not allowed
// Only letters and numbers are allowed
// Therefore, the result is false
console.log("Username:", usernamePattern.test("user@123")); // false



// Phone number validation
// ^       → start of the string
// \d      → any digit from 0 to 9
// {10}    → exactly 10 digits
// $       → end of the string
const phonePattern = /^\d{10}$/;


// Contains exactly 10 digits
// Therefore, the result is true
console.log("Phone:", phonePattern.test("9876543210")); // true


// Contains letters (abc)
// Only digits are allowed
// Therefore, the result is false
console.log("Phone:", phonePattern.test("98765abc10")); // false



// PIN validation
// ^       → start of the string
// \d      → any digit from 0 to 9
// {6}     → exactly 6 digits
// $       → end of the string
const pinPattern = /^\d{6}$/;


// Contains exactly 6 digits
// Therefore, the result is true
console.log("PIN:", pinPattern.test("560001")); // true


// Contains only 4 digits
// Exactly 6 digits are required
// Therefore, the result is false
console.log("PIN:", pinPattern.test("5600")); // false



// Name validation
// ^          → start of the string
// [A-Za-z]   → allows uppercase and lowercase letters
// +          → one or more letters
// $          → end of the string
const namePattern = /^[A-Za-z]+$/;


// "Rahul" contains only letters
// Therefore, the result is true
console.log("Name:", namePattern.test("Rahul")); // true


// "Rahul123" contains numbers
// Only letters are allowed
// Therefore, the result is false
console.log("Name:", namePattern.test("Rahul123")); // false



// Email validation
// ^          → start of the string
// [^\s@]+    → one or more characters except space and @
// @          → must contain an @ symbol
// [^\s@]+    → one or more characters except space and @
// \.         → must contain a dot
// [^\s@]+    → one or more characters except space and @
// $          → end of the string
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// "student@example.com" follows the basic email pattern
// Therefore, the result is true
console.log("Email:", emailPattern.test("student@example.com")); // true


// "student@example" does not contain a dot after the domain
// Therefore, the result is false
console.log("Email:", emailPattern.test("student@example")); // false



// Password length validation
// ^       → start of the string
// .       → any character
// {8,}    → at least 8 characters
// $       → end of the string
const passwordPattern = /^.{8,}$/;


// "Hello123" contains 8 characters
// Therefore, the result is true
console.log("Password:", passwordPattern.test("Hello123")); // true


// "Hello" contains only 5 characters
// At least 8 characters are required
// Therefore, the result is false
console.log("Password:", passwordPattern.test("Hello")); // false