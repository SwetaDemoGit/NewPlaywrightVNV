try {
    const number = 10;
    number();
} catch (error) {
    console.log("Error:", error.message);
}

// Common built-in error classes

// JavaScript provides several specific error types:

// Error → General error
// TypeError → Wrong type of value
// ReferenceError → Variable doesn't exist
// SyntaxError → Invalid JavaScript syntax
// RangeError → Value is outside the allowed range

try {
    const number = 10;
    number();
} catch (error) {
    console.log(error instanceof Error);      // true
    console.log(error instanceof TypeError);  // true
    console.log(error.name);                  // TypeError
}

// when JavaScript encounters a problem, it creates an appropriate error 
// object and, if you're inside try...catch, that object is received by 
// the catch(error) parameter.