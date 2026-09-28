// Optional Property

interface Student {
  name: string;
  age: number;
  email?: string;
}

const student1: Student = {
  name: "John",
  age: 20
};

const student2: Student = {
  name: "Mary",
  age: 22,
  email: "mary@example.com"
};

console.log(student1);
console.log(student2);
