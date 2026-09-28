interface User {
  id: number;
  name: string;
  email: string;
}

// Predefined sample data (fixture)
const userFixture: User = {
  id: 1,
  name: "John",
  email: "john@example.com"
};

console.log("ID:", userFixture.id);
console.log("Name:", userFixture.name);
console.log("Email:", userFixture.email);
