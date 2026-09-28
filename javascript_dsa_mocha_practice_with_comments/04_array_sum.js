// Question 4: Sum of Array
// Calculate the sum of all elements.
//
// Example:
// [10, 20, 30, 40] -> 100

function array_sum(arr) {
    // Start the total at zero.
    let sum = 0;

    // Add each number to sum.
    for (let num of arr) {
        sum += num;
    }

    return sum;
}

module.exports = { array_sum };
