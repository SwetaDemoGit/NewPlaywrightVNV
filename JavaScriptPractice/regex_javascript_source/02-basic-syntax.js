// Basic Regular Expression Syntax


// [abc] → matches any one character: a, b, or c
console.log(/[abc]/.test("apple")); // true
// "apple" contains "a"


// [abc] → matches any one character: a, b, or c
console.log(/[abc]/.test("dog")); // false
// "dog" does not contain a, b, or c


// [0-9] → matches any digit from 0 to 9
console.log(/[0-9]/.test("Hello 5")); // true
// "Hello 5" contains the digit 5


// [0-9] → matches any digit from 0 to 9
console.log(/[0-9]/.test("Hello")); // false
// "Hello" does not contain any digit


// [a-z] → matches any lowercase letter from a to z
console.log(/[a-z]/.test("hello")); // true
// "hello" contains lowercase letters


// [A-Z] → matches any uppercase letter from A to Z
console.log(/[A-Z]/.test("HELLO")); // true
// "HELLO" contains uppercase letters


// \d → matches any digit from 0 to 9
console.log(/\d/.test("abc5")); // true
// "abc5" contains the digit 5


// \s → matches a space or whitespace character
console.log(/\s/.test("Hello World")); // true
// There is a space between "Hello" and "World"


// \d+ → matches one or more digits
console.log(/\d+/.test("123")); // true
// "123" contains one or more digits


// \d+ → matches one or more digits
console.log(/\d+/.test("abc")); // false
// "abc" does not contain any digit


// o* → matches zero or more occurrences of "o"
console.log(/go*/.test("g")); // true
// "o" occurs zero times, which is allowed


// o* → matches zero or more occurrences of "o"
console.log(/go*/.test("gooo")); // true
// "o" occurs three times


// ? → makes the previous character optional
console.log(/colou?r/.test("color")); // true
// "u" occurs zero times, so "color" matches


// ? → makes the previous character optional
console.log(/colou?r/.test("colour")); // true
// "u" occurs one time, so "colour" also matches


// \d{4} → matches exactly 4 digits
console.log(/\d{4}/.test("2026")); // true
// "2026" contains exactly 4 digits


// ^ → beginning of string
// \d{10} → exactly 10 digits
// $ → end of string
// Entire string must contain exactly 10 digits
console.log(/^\d{10}$/.test("9876543210")); // true


// ^ → beginning of string
// \d{10} → exactly 10 digits
// $ → end of string
// "98765" has only 5 digits, so it does not match
console.log(/^\d{10}$/.test("98765")); // false


// | → OR
// Matches either "cat" OR "dog"
console.log(/cat|dog/.test("I have a cat")); // true
// The string contains "cat"


// | → OR
// Matches either "cat" OR "dog"
console.log(/cat|dog/.test("I have a bird")); // false
// The string contains neither "cat" nor "dog"


// i → case-insensitive flag
// "hello" matches "HELLO", "Hello", "HELLO", etc.
console.log(/hello/i.test("HELLO")); // true