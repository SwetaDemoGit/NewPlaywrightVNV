// Question 15: Second Largest
// Find the second largest distinct number.
// Return -1 when it does not exist.
//
// Example:
// [10, 50, 30, 50, 20] -> 30

function second_largest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    // Track the largest and second largest values in one pass.
    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }

    return second === -Infinity ? -1 : second;
}

module.exports = { second_largest };
