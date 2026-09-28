let password = "Weakpass";

if (password.length < 8) {
    console.log("Password too short");

} else if (!/[A-Z]/.test(password)) {
    console.log("Must contain an uppercase letter");

} else if (!/[0-9]/.test(password)) {
    console.log("Must contain a digit");

} else if (!/[!@#$%^&*]/.test(password)) {
    console.log("Must contain a special character");

} else if (/\s/.test(password)) {
    console.log("Spaces not allowed");

} else {
    console.log("Valid password");
}