// Question 20: Maximum Consecutive Ones
// Find the maximum number of consecutive 1s.
//
// Example:
// [1, 1, 0, 1, 1, 1] -> 3

function max_consecutive_ones(arr) {
    let current = 0;
    let maximum = 0;

    for (let num of arr) {
        if (num === 1) {
            current++;

            // Update maximum whenever a longer sequence is found.
            maximum = Math.max(maximum, current);
        } else {
            // A zero breaks the consecutive sequence.
            current = 0;
        }
    }

    return maximum;
}

module.exports = { max_consecutive_ones };
