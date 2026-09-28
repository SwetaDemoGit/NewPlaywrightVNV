//Error propagation = An error travels from the function where it 
// occurs to the calling functions until it is handled by catch.

function processOrder() {
    throw new Error("Order processing failed");
}

function placeOrder() {
    processOrder();
}

try {
    placeOrder();
} catch (error) {
    console.log("Error handled:", error.message);
}

//second example

function checkAge(age) {
    if (age < 18) {
        throw new Error("Age is too low");
    }
}

function register() {
    checkAge(15);
}

try {
    register();
} catch (error) {
    console.log("Error:", error.message);
}

//advance 
// function getUser() {
//     throw new Error("User not found");
// }

// function getOrders() {
//     getUser();
// }

// function displayOrders() {
//     getOrders();
// }

// try {
//     displayOrders();
// } catch (error) {
//     console.log("Error:", error.message);
// }
