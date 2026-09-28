interface User {
  id: number;
  name: string;
  email: string;
}

// Multiple predefined fixtures
const users: User[] = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Mary", email: "mary@example.com" }
];

console.log(users[0].name);
console.log(users[1].name);
