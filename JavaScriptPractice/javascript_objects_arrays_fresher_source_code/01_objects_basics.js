// 01 - Introduction to Objects

// An object stores related information as key-value pairs.

const student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript",
    isActive: true
};

console.log(student); // dict

// Accessing properties using dot notation
console.log(student.name);
console.log(student.age);
console.log(student.course);
console.log(student.isActive);

// Accessing properties using bracket notation
console.log(student["course"]);
console.log(student["isActive"]);

// Updating a property
student.age = 23;
console.log(student.age);

// Adding a new property
student.city = "Delhi";
console.log(student);


// Deleting a property
delete student.isActive;
console.log(student);
