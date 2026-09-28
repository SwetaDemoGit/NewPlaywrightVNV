interface User {
  id: number;
  name: string;
  email: string;
}

// Sample JSON fixture
const userJson = `{
  "id": 1,
  "name": "John",
  "email": "john@example.com"
}`;

// Convert JSON fixture into a User object
const user = JSON.parse(userJson) as User;

console.log("Name:", user.name);
console.log("Email:", user.email);
