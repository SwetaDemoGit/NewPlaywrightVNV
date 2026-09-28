// 02 - Creating and Using Objects

const employee = {
    name: "Priya",
    department: "IT",
    salary: 60000,

    // A function inside an object is called a method.
    greet: function () {
        console.log("Hello, I am " + this.name);
    }
};

console.log(employee.name);
console.log(employee.department);

employee.greet();

// Nested object
const company = {
    name: "ABC Technologies",
    location: {
        city: "Chennai",
        country: "India"
    }
};

console.log(company.name);
console.log(company.location.city);

// Object with an array
const student = {
    name: "Amit",
    subjects: ["JavaScript", "SQL", "HTML"]
};

console.log(student.subjects);
console.log(student.subjects[0]);
