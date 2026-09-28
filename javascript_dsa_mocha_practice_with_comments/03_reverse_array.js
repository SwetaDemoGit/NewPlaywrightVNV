// Question 3: Reverse an Array
// Return the elements in reverse order.
// Do not use the built-in reverse() method.
//
// Example:
// [10, 20, 30, 40] -> [40, 30, 20, 10]

function reverse_array(arr) {
    let result = [];

    // Start from the last index and move towards index 0.
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

module.exports = { reverse_array };
