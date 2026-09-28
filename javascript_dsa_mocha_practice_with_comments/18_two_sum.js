// Question 18: Two Sum
// Find indices of two numbers whose sum equals target.
// Return -1 if no pair exists.
//
// Example:
// [2, 7, 11, 15], target 9 -> [0, 1]

function two_sum(arr, target) {
    // Map stores number -> index.
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        // If complement was seen earlier, we found the pair.
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(arr[i], i);
    }

    return -1;
}

module.exports = { two_sum };
