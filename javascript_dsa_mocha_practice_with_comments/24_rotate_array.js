// Question 24: Rotate Array
// Rotate the array to the right by k positions.
//
// Example:
// [1, 2, 3, 4, 5], k = 2
// -> [4, 5, 1, 2, 3]

function rotate_array(arr, k) {
    if (arr.length === 0) {
        return arr;
    }

    // If k is larger than the array length, reduce it.
    k = k % arr.length;

    // Last k elements move to the front.
    return arr.slice(-k).concat(arr.slice(0, -k));
}

module.exports = { rotate_array };
