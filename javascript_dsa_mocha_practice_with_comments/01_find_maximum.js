// Question 1: Find Maximum
// Given an array of integers, return the largest element.
//
// Example:
// [10, 25, 7, 40, 15] -> 40
//
// Approach:
// Keep track of the largest value seen so far.

function find_maximum(arr) {
    // Start with the first element as the current maximum.
    let max = arr[0];

    // Compare every remaining element with max.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Return the largest value found.
    return max;
}

module.exports = { find_maximum };
