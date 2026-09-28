// 13 - Practice Exercises
//
// Try these yourself before looking at the sample answers.


// Exercise 1:
// Create an object called student with:
// name
// age
// course
//
// Print the student's name.


// Exercise 2:
// Add a city property to the student object.


// Exercise 3:
// Create an array containing five numbers.
// Print the first and last values.


// Exercise 4:
// Add a new value to the end of the array using push().


// Exercise 5:
// Use a for loop to print every array value.


// Exercise 6:
// Use forEach() to print every array value.


// Exercise 7:
// Use map() to create a new array containing
// the square of every number.


// Exercise 8:
// Use filter() to create an array containing
// only even numbers.


// Exercise 9:
// Create an array of employee objects.
// Each employee should have:
// name
// department
// salary
//
// Use filter() to find IT employees.


// Exercise 10:
// Use map() to create an array containing only
// employee names.


// ---------------- SAMPLE ANSWERS ----------------

const student = {
    name: "Rahul",
    age: 22,
    course: "JavaScript"
};

console.log("Exercise 1:", student.name);

student.city = "Chennai";
console.log("Exercise 2:", student);

const numbers = [10, 20, 30, 40, 50];

console.log("Exercise 3 first:", numbers[0]);
console.log("Exercise 3 last:", numbers[numbers.length - 1]);

numbers.push(60);
console.log("Exercise 4:", numbers);

console.log("Exercise 5:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Exercise 6:");
numbers.forEach(number => {
    console.log(number);
});

const squares = numbers.map(number => number * number);
console.log("Exercise 7:", squares);

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Exercise 8:", evenNumbers);

const employees = [
    { name: "Rahul", department: "IT", salary: 50000 },
    { name: "Priya", department: "HR", salary: 55000 },
    { name: "Amit", department: "IT", salary: 65000 }
];

const itEmployees = employees.filter(
    employee => employee.department === "IT"
);

console.log("Exercise 9:", itEmployees);

const employeeNames = employees.map(
    employee => employee.name
);

console.log("Exercise 10:", employeeNames);
