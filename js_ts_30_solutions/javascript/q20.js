// Q20. HTML Tag Validator
const tag = "<div>";

// Valid simple opening tag name: starts with a letter,
// followed by letters, digits, or hyphens.
const isValid = /^<[A-Za-z][A-Za-z0-9-]*>$/.test(tag);

console.log(isValid ? "Valid" : "Invalid");
