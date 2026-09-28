// Question 6: Count Occurrences
// Count how many times target occurs in an array.
//
// Example:
// [1, 2, 2, 3, 2, 4], target 2 -> 3

function count_occurrences(arr, target) {
    let count = 0;

    for (let num of arr) {
        if (num === target) {
            count++;
        }
    }

    return count;
}

module.exports = { count_occurrences };
