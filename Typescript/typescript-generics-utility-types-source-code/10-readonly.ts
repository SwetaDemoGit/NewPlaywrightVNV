interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = {
  name: "John",
  age: 25
};

console.log(user.name);

// Error: Cannot modify a readonly property.
// user.name = "Alex";
