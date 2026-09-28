// Best Practices
function calculateTotal(price, tax) {
    return price + tax;
}
console.log(calculateTotal(100, 18));

function calculateDiscount(price) {
    const discount = price * 0.10;
    return price - discount;
}
console.log(calculateDiscount(500));

const company = "TechCorp";

let count = 0;
count++;

console.log(company);
console.log(count);

// Keep variables inside the smallest useful scope.
// Avoid unnecessary global mutable state.
