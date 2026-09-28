// Best Practices for Regular Expressions

// 1. Use meaningful names
const phonePattern = /^\d{10}$/;

// 2. Test valid and invalid values
const values = [
    "9876543210",
    "98765",
    "98765432101",
    "98765abc10",
    ""
];

for (const value of values) {
    console.log(value, "=>", phonePattern.test(value));
}

// 3. Use anchors for complete validation
console.log(/\d{10}/.test("abc9876543210xyz"));  // true
console.log(/^\d{10}$/.test("abc9876543210xyz")); // false

// 4. Use simple string methods when appropriate
const text = "I am learning JavaScript";

console.log(text.includes("JavaScript")); // true
