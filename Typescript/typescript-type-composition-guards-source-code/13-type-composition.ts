interface Person {
  name: string;
  age: number;
}

interface Address {
  city: string;
  country: string;
}

interface Contact {
  email: string;
  phone: string;
}

type User = Person & Address & Contact;

const user: User = {
  name: "John",
  age: 25,
  city: "Chennai",
  country: "India",
  email: "john@example.com",
  phone: "9876543210"
};

console.log(user);
