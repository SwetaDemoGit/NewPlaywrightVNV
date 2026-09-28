// Question 30: Product Except Self
// For every index, return the product of all other elements.
//
// Example:
// [1, 2, 3, 4] -> [24, 12, 8, 6]
//
// Approach:
// First calculate products of elements to the left (prefix).
// Then multiply by products of elements to the right (suffix).
// This avoids using division.

function product_except_self(arr) {
    let result = new Array(arr.length).fill(1);

    // prefix stores the product of elements before index i.
    let prefix = 1;

    for (let i = 0; i < arr.length; i++) {
        result[i] = prefix;
        prefix *= arr[i];
    }

    // suffix stores the product of elements after index i.
    let suffix = 1;

    for (let i = arr.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= arr[i];
    }

    return result;
}

module.exports = { product_except_self };
