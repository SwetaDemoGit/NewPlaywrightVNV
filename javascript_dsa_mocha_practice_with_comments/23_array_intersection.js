// Question 23: Array Intersection
// Return unique elements that appear in both arrays.
//
// Example:
// [1, 2, 2, 3], [2, 2, 4] -> [2]

function array_intersection(arr1, arr2) {
    // Set provides fast lookup for values from arr1.
    let set1 = new Set(arr1);
    let result = [];

    for (let num of arr2) {
        // Avoid adding the same common value more than once.
        if (set1.has(num) && !result.includes(num)) {
            result.push(num);
        }
    }

    return result;
}

module.exports = { array_intersection };
