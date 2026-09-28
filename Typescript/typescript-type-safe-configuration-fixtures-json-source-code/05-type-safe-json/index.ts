interface User {
  name: string;
  age: number;
}

const jsonData = '{"name":"John","age":25}';

// Parse JSON and tell TypeScript to treat the result as User
const user = JSON.parse(jsonData) as User;

console.log("Name:", user.name);
console.log("Age:", user.age);

// Note: "as User" does not validate the data at runtime.
