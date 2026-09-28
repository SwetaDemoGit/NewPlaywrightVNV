// 06 - map() and filter()

const numbers = [1, 2, 3, 4, 5];

// map()
// Creates a NEW array by transforming every element.

const doubled = numbers.map(number => number * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// Another map example
const names = ["rahul", "priya", "amit"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);

// filter()
// Creates a NEW array containing only elements
// that satisfy a condition.

const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log("Even numbers:", evenNumbers);

const greaterThanTwo = numbers.filter(number => number > 2);

console.log("Greater than 2:", greaterThanTwo);

// map vs filter
//
// map:
// [1, 2, 3] -> [2, 4, 6]
//
// filter:
// [1, 2, 3] -> [2, 3]  (example condition: number > 1)
