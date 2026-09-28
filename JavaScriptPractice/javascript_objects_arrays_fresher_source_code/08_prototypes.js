// 08 - Prototypes
//A prototype is another object from which an object can 
// inherit properties and methods.

// JavaScript objects can inherit properties and methods
// through the prototype chain.

// Every JavaScript object has an internal prototype relationship
// with another object (or null).

const person = {
    greet: function () {
        console.log("Hello!");
    }
};

const student = Object.create(person);
//Object.create(person) creates a new 
// object whose prototype is person.

student.name = "Rahul";

console.log(student.name);

// greet() is not directly defined on student.
// JavaScript finds it through the prototype chain.
student.greet();

console.log(student.__proto__ === person); // true
console.log(student); // true

// Does student have someProperty?
//         ↓
//        No
//         ↓
// Does person have someProperty?
//         ↓
//        No
//         ↓
// Does Object.prototype have someProperty?
//         ↓
//        No
//         ↓
//        null
//         ↓
// Property not found → undefined
//
// If JavaScript cannot find a property on the object itself,
// it looks up the prototype chain.
//Object.prototype is a built-in JavaScript object that
//  sits near the top of the prototype chain for almost all normal JavaScript objects
