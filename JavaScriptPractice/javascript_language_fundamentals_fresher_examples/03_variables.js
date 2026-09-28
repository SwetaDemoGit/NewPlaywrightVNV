// 03 - Variables: let, const and var

// let: use when the value may change
let score = 50;
console.log(score);

score = 75;
console.log(score);

// const: use when the variable should not be reassigned
const country = "India";
console.log(country);

// The following would cause an error:
// country = "USA";

// const does not make an object completely immutable.
const student = {
    name: "Rahul",
    age: 22
};

student.age = 23;
console.log(student);

// var: older variable declaration
var city = "Delhi";
console.log(city);

city = "Mumbai";
console.log(city);

// Modern JavaScript generally prefers const and let over var.
