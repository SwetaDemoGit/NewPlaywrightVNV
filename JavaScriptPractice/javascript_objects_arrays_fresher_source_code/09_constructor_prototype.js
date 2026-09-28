// 09 - Constructor Functions and Prototypes

// Constructor functions were commonly used in older JavaScript
// to create multiple objects with shared behavior.

function Employee(name, department) {
    this.name = name;
    this.department = department;
}

// Add a shared method to the prototype.
//Add a getDetails() method to the 
// prototype of objects created by Employee.
Employee.prototype.getDetails = function () {
    return this.name + " - " + this.department;
};

const employee1 = new Employee("Rahul", "IT");
const employee2 = new Employee("Priya", "HR");

console.log(employee1.getDetails());
//employee1 doesnt have getDetails() method directly, 
// but it can access it through the prototype chain.
console.log(employee2.getDetails());

// Both objects can use the same prototype method.

// The method is not separately created for every object.
// It is shared through Employee.prototype.
// What exactly is Employee.prototype?

// This is worth remembering.

// When you create a constructor function:

// function Employee() {}

// JavaScript automatically gives that function a prototype property.

// So:

// Employee.prototype

// is an object.

// You can add shared methods to it:

// Employee.prototype.getDetails = function () {
//     // ...
// };

// Objects created using:

// new Employee()

// will have Employee.prototype in their prototype chain.
//There is one shared function:
        //      Employee.prototype
        //      ┌─────────────────┐
        //      │ getDetails()     │
        //      └────────┬────────┘
        //               ↑
        //       ┌───────┴───────┐
        //       │               │
        //   employee1       employee2
        //   ┌─────────┐     ┌─────────┐
        //   │ Rahul   │     │ Priya   │
        //   │ IT      │     │ HR      │
        //   └─────────┘     └─────────┘
