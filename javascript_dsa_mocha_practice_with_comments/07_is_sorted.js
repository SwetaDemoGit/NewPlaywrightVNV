// Question 7: Check Sorted Array
// Return true if the array is sorted in ascending order.
//
// Example:
// [1, 2, 3, 4] -> true
// [1, 3, 2, 4] -> false

function is_sorted(arr) {
    // Compare every element with the element immediately before it.
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }

    return true;
}

module.exports = { is_sorted };
