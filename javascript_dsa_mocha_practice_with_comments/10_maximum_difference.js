// Question 10: Maximum Difference
// Find largest element - smallest element.
//
// Example:
// [10, 5, 20, 8] -> 15

function maximum_difference(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max - min;
}

module.exports = { maximum_difference };
