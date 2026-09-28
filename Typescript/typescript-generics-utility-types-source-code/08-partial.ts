interface User {
  name: string;
  age: number;
  email: string;
}

function updateUser(user: Partial<User>): void {
  console.log(user);
}

updateUser({ name: "John" });
updateUser({ email: "john@example.com" });
