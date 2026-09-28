// Question 17: Missing Number
// Array contains numbers from 1 to n with one number missing.
// Return the missing number.
//
// Example:
// [1, 2, 4, 5], n = 5 -> 3

function find_missing_number(arr, n) {
    // Sum of numbers 1..n is n * (n + 1) / 2.
    let expectedSum = n * (n + 1) / 2;
    let actualSum = 0;

    for (let num of arr) {
        actualSum += num;
    }

    // The difference is the missing number.
    return expectedSum - actualSum;
}

module.exports = { find_missing_number };
