// 03 - Arrays

// An array stores multiple values in an ordered collection.

const fruits = ["Apple", "Mango", "Orange", "Banana"];

console.log(fruits);

// Array indexes start from 0.
console.log(fruits[0]);
console.log(fruits[1]);

// Length
console.log("Number of fruits:", fruits.length);

// Changing an element
fruits[1] = "Grapes";
console.log(fruits);



// Adding an element at the end
fruits.push("Mango");
console.log(fruits);

// Removing the last element
fruits.pop();
console.log(fruits);

// Adding an element at the beginning
fruits.unshift("Pineapple");
console.log(fruits);

// Removing the first element
fruits.shift();
console.log(fruits);
