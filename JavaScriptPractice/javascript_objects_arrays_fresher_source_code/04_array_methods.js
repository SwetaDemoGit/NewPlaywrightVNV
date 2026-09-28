// 04 - Common Array Methods

const numbers = [10, 20, 30, 40, 50];

// push - adds to the end
numbers.push(60);
console.log("push:", numbers);

// pop - removes from the end
numbers.pop();
console.log("pop:", numbers);

// unshift - adds to the beginning
numbers.unshift(5);
console.log("unshift:", numbers);

// shift - removes from the beginning
numbers.shift();
console.log("shift:", numbers);

// includes - checks whether a value exists
console.log("Has 30?", numbers.includes(30));

// indexOf - finds the index of a value
console.log("Index of 40:", numbers.indexOf(90));

// slice - returns part of an array without changing the original array
const selectedNumbers = numbers.slice(1, 4);
console.log("slice:", selectedNumbers);
console.log("original:", numbers);

// join - combines array elements into a string
const names = ["Rahul", "Priya", "Amit"];
console.log(names.join(", "));

// concat - combines arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);
console.log("concat:", combined);
