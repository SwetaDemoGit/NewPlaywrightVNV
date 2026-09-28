// 11 - Useful Object Methods

const employee = {
    name: "Rahul",
    department: "IT",
    salary: 60000
};

// Object.keys()
// Returns an array containing property names.
console.log(Object.keys(employee));

// Object.values()
// Returns an array containing property values.
console.log(Object.values(employee));

// Object.entries()
// Returns an array of key-value pairs.
console.log(Object.entries(employee));

// Object.hasOwn()
// Checks whether the object directly contains a property.
console.log(Object.hasOwn(employee, "name"));
console.log(Object.hasOwn(employee, "age"));
