// String Methods with Regular Expressions


// match() finds the matching text in the string
// /cat/g → searches for all occurrences of "cat"
// g → global search, so it finds every "cat"
const text = "cat dog cat";

console.log(text.match(/cat/g));

// Output:
// ["cat", "cat"]



// search() searches for the pattern in the string
// It returns the position (index) of the first match
const message = "Hello JavaScript";

console.log(message.search(/JavaScript/));

// "JavaScript" starts at index 6



// replace() searches for the matching text
// and replaces it with the new text
const sentence = "I like cats";

const replaced = sentence.replace(/cats/, "dogs");

console.log(replaced);

// Output:
// I like dogs



// replace() can also be used with Regex flags
// /hello/ → searches for "hello"
// i → ignores uppercase and lowercase differences
// g → replaces all matching occurrences
const greeting = "Hello HELLO hello";

console.log(greeting.replace(/hello/gi, "Hi"));

// Output:
// Hi Hi Hi