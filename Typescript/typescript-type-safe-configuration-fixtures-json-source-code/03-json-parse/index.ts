// JSON is text
const jsonData = '{"name":"John","age":25}';

// Convert JSON text into a JavaScript object
const user = JSON.parse(jsonData);

console.log("Name:", user.name);
console.log("Age:", user.age);
