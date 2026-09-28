// Question 25: Majority Element
// Find the element appearing more than n/2 times.
// A majority element is guaranteed to exist.
//
// Example:
// [2, 2, 1, 1, 1, 2, 2] -> 2
//
// Approach:
// Boyer-Moore Majority Vote Algorithm.

function majority_element(arr) {
    let count = 0;
    let candidate = null;

    for (let num of arr) {

        // If count becomes zero, choose the current value.
        if (count === 0) {
            candidate = num;
        }

        // Same value increases support; different value cancels support.
        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

module.exports = { majority_element };
