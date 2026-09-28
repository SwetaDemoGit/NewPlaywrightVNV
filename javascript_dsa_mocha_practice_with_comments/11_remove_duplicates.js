// Question 11: Remove Duplicates
// Return unique elements while maintaining original order.
//
// Example:
// [1, 2, 2, 3, 1, 4] -> [1, 2, 3, 4]

function remove_duplicates(arr) {
    // Set is useful because it remembers which values we have seen.
    let seen = new Set();
    let result = [];

    for (let num of arr) {
        if (!seen.has(num)) {
            seen.add(num);
            result.push(num);
        }
    }

    return result;
}

module.exports = { remove_duplicates };
