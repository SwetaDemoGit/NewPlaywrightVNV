// Rename variables while destructuring

let student = {
    name: "Anita",
    age: 21
};

//let { name, age } = student; 
//we don't want our variables to be called name and age.
let {
    name: studentName, //object property : new variable name
    age: studentAge //Take the age property and store its value in a new variable called studentAge.
} = student;

console.log(studentName);
console.log(studentAge);
