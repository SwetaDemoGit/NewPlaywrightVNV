// Complete Validation Example

const usernamePattern = /^[A-Za-z0-9]{5,10}$/;
const phonePattern = /^\d{10}$/;
const pinPattern = /^\d{6}$/;

const username = "user123";
const phone = "9876543210";
const pin = "560001";

if (usernamePattern.test(username)) {
    console.log("Valid username");
} else {
    console.log("Invalid username");
}

if (phonePattern.test(phone)) {
    console.log("Valid phone number");
} else {
    console.log("Invalid phone number");
}

if (pinPattern.test(pin)) {
    console.log("Valid PIN");
} else {
    console.log("Invalid PIN");
}
