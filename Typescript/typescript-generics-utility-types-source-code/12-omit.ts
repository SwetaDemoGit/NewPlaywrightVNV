interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;

const user: PublicUser = {
  name: "John",
  age: 25,
  email: "john@example.com"
};

console.log(user);
