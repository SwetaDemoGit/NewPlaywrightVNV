//The throw keyword is used when we want to manually create and 
// send an error.

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age must be 18 or above");
    }
    return "Access allowed";
}

try {
    console.log(checkAge(15));
} catch (error) {
    console.log("Error:", error.message);
}

function registerUser(username) {
    if (!username) {
        throw new Error("Username is required");
    }
    console.log("User registered:", username);
}

try {
    registerUser("");
} catch (error) {
    console.log("Registration failed:", error.message);
}
