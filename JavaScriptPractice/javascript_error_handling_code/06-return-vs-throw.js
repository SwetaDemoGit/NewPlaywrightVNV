function add(a, b) {
    return a + b;
}

console.log("Result:", add(10, 20));

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.log("Error:", error.message);
}

// | `return`                           | `throw`                               |
// | ---------------------------------- | ------------------------------------- |
// | Sends a value back from a function | Sends an error                        |
// | Used for normal/expected results   | Used for problems/invalid situations  |
// | Function ends normally             | Function ends with an error           |
// | `catch` is not triggered           | Can be handled by `catch`             |
// | Example: `return 100`              | Example: `throw new Error("Invalid")` |

