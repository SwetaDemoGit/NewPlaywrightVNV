type Name = {
  name: string;
};

type Age = {
  age: number;
};

type Person = Name & Age;

const person: Person = {
  name: "John",
  age: 25
};

console.log(person);
