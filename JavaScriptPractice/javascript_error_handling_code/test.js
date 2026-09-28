class AgeError extends Error {
    constructor(message) {
        super(message); // calls parent constructor with the message
        this.name = "AgeError"; // gives our error its own name.
    }
}

function checkAge(age) {
    if (age < 18) {
        throw new AgeError("Age must be 18 or above");
    }
    return "Access allowed";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log("Error Type:", error.name);
    console.log("Message:", error.message);
}