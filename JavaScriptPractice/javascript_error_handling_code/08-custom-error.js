class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username) {
    if (!username) {
        throw new ValidationError("Username is required");
    }
    console.log("User registered");
}

try {
    registerUser("");
} catch (error) {
    console.log("Error Type:", error.name);
    console.log("Message:", error.message);
}

//## second

// class PaymentError extends Error {

//     constructor(message) {
//         super(message); // calls parent constructor with the message
//         this.name = "PaymentError"; //gives our error its own name.
//     }
// }

// function makePayment(amount) {

//     if (amount <= 0) {
//         throw new PaymentError("Payment amount must be greater than 0");
//     }

//     return "Payment successful";
// }

// try {
//     console.log(makePayment(-500));
// } catch (error) {
//     console.log("Error:", error.message);
// }

