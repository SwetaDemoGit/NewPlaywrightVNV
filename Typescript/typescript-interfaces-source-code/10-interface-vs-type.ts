// Interface and Type

interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};

const user1: User = {
  name: "John",
  age: 20
};

const user2: UserType = {
  name: "Mary",
  age: 22
};

console.log(user1);
console.log(user2);
