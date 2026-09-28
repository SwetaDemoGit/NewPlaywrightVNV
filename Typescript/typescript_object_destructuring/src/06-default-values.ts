// Create a student object
let student = {
    name: "Rahul",
    age: 22
};

// Destructure the object
// Get the name property and store it in a variable called name
// If course is not available, use "TypeScript" as the default value
let {
    name,
    course = "TypeScript"
} = student;

// Print the student's name
console.log(name);

// Print the course
// Since course is not present in the object,
// the default value "TypeScript" is used
console.log(course);