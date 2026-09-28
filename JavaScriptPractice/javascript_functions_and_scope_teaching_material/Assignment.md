Question:
Create a JavaScript program that uses a variable before declaring it.

Your program should:

Print a student's name before the variable declaration.
Declare the name using var.
Print the name again after assigning a value.

Expected Output:

undefined
Aman

Task: Write the code yourself and explain why the first output is undefined.

Bonus: Change var to let and observe what happens.

##############

Question:
Create a function named calculateSquare() that takes a number and prints its square.

Requirements:

Call calculateSquare(6) before the function declaration.
Use a function declaration.
The function should print the square of the number.

Expected Output:

36

Bonus: Create another function using a function expression and try calling it before declaration. Observe what happens

Function declaration → can be called before declaration ✅
var function expression → undefined → TypeError ❌
let/const function expression →  ReferenceError ❌

###########
return in JavaScript

Question:
Create a function calculateTotal() that accepts two numbers and returns their sum.

Requirements:

Create the function calculateTotal(a, b).
Use return to return the sum.
Store the returned value in a variable.
Print the result.

Expected Output:

Total: 150

Example Input:

calculateTotal(70, 80);

##

Create a JavaScript program to demonstrate Global, Local, and Lexical Scope.

Task:

Create a global variable schoolName.
Create a function studentDetails() with a local variable studentName.
Inside another function displayStudent(), access studentName from the outer function (lexical scope).
Print all the values.

Expected Output:

School: ABC School
Student: Rahul
Student: Rahul

Challenge:
Try accessing studentName outside studentDetails(). What happens and why?

##
Question:
Create a function createGreeting() that stores a person's name and returns another function to greet that person.

Requirements:

createGreeting(name) should accept a name.
Inside it, create an inner function.
The inner function should print: "Hello, Rahul!"
Call the returned function.

Expected Output:

Hello, Rahul!

Hint: The inner function should remember the name variable from the outer function.


######
this Keyword
1. this with Object

Create an object called student with:

name
course
A method displayInfo()

Inside displayInfo(), use this to print the student's name and course.

Expected Output:

Name: Rahul
Course: JavaScript
2. this with Arrow Function

Create an object called student with:

name
A regular method showName()
Inside showName(), create an arrow function.
Use this.name inside the arrow function and print it.

Expected Output:

Student Name: Rahul