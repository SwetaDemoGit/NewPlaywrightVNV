function createAccount(username) {
    if (!username) {
        throw new Error("Username is required");
    }
    return "Account created";
}

try {
    console.log(createAccount(""));
} catch (error) {
    console.log("Account error:", error.message);
}

try {
    throw new Error("Database operation failed");
} catch (error) {
    console.log("Operation failed:", error.message);
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Email is required");
} catch (error) {
    console.log(error.name + ":", error.message);
}
