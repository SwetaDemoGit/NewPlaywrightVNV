// Question 5: Find Minimum
// Return the smallest number in an array.
//
// Example:
// [10, 4, 25, 2, 18] -> 2

function find_minimum(arr) {
    let min = arr[0];

    // Compare each value with the current minimum.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

module.exports = { find_minimum };
