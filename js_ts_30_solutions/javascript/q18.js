// Q18. Phone Number Validator
const phoneNumber = "9876543210";

const isValid = /^\d{10}$/.test(phoneNumber);

console.log(isValid ? "Valid" : "Invalid");
