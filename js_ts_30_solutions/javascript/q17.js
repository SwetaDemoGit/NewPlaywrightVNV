// Q17. Extract Numbers
const text = "abc12xy45";
const numbers = text.match(/\d+/g) || [];

console.log(numbers.join(" "));
