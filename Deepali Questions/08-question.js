let productCode = "AB1234-NY";

// Check product code format
if (/^[A-Z]{2}[0-9]{4}(-[A-Z]{2})?$/.test(productCode)) {
    console.log("Valid product code");
} else {
    console.log("Invalid product code");
}

// ^           → start
// [A-Z]{2}    → exactly 2 uppercase letters
// [0-9]{4}    → exactly 4 digits
// (-[A-Z]{2})? → optional dash + 2 uppercase letters
// $           → end