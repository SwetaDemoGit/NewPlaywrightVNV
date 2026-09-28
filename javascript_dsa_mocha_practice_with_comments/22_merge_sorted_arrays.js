// Question 22: Merge Sorted Arrays
// Merge two sorted arrays into one sorted array.
//
// Example:
// [1, 3, 5] + [2, 4, 6] -> [1, 2, 3, 4, 5, 6]

function merge_sorted_arrays(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare the current elements of both arrays.
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1.
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2.
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

module.exports = { merge_sorted_arrays };
