// Using the RegExp Object


// Creating a Regular Expression using Regex literal
// /hello/ looks for the text "hello"
const pattern1 = /hello/;


// Creating a Regular Expression using the RegExp constructor
// new RegExp("hello") creates the same pattern as /hello/
const pattern2 = new RegExp("hello");


// test() checks whether the pattern is found in the string
// "hello world" contains "hello", so the result is true
console.log(pattern1.test("hello world")); // true


// pattern2 also looks for "hello"
// "hello world" contains "hello", so the result is true
console.log(pattern2.test("hello world")); // true



// Creating a Regex using the literal syntax
// \d → matches any digit from 0 to 9
const digitPattern1 = /\d/;


// Creating the same Regex using the RegExp constructor
// "\\d" is used because \ has a special meaning inside a JavaScript string
// After processing the string, RegExp receives \d
const digitPattern2 = new RegExp("\\d");


// test() checks whether the pattern matches the string
// "abc5" contains the digit 5, so the result is true
console.log(digitPattern1.test("abc5")); // true


// digitPattern2 also represents \d
// "abc5" contains the digit 5, so the result is true
console.log(digitPattern2.test("abc5")); // true



// Creating a Regex to find the text "cat"
const pattern = /cat/;


// test() checks whether "cat" exists in the given string
// "I have a cat" contains "cat", so the result is true
console.log(pattern.test("I have a cat")); // true


// exec() searches for a match and returns information about the match
// The result contains the matched text and other details
const result = pattern.exec("I have a cat");


// Display the information returned by exec()
console.log(result);