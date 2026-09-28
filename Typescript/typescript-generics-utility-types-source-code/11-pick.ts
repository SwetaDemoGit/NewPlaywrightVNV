interface User {
  name: string;
  age: number;
  email: string;
  phone: string;
}

type UserContact = Pick<User, "name" | "email">;

const contact: UserContact = {
  name: "John",
  email: "john@example.com"
};

console.log(contact);
