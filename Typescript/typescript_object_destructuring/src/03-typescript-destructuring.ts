// TypeScript object with type annotations

let student: { //variable called student.
    name: string;
    age: number;
    city: string;
} = {
    name: "Rahul",
    age: 22,
    city: "Mumbai"
};

//is the type of the object ."The student object must have these properties."

let { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);
