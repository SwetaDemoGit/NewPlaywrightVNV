// Introduction to Regular Expressions

const pattern = /JavaScript/;

console.log(pattern.test("I am learning JavaScript")); // true
console.log(pattern.test("I am learning Python"));    // false

const digitPattern = /\d/;

console.log(digitPattern.test("Hello 5")); // true
console.log(digitPattern.test("Hello"));   // false
