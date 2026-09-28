// Question 16: Move Zeros
// Move all zeros to the end while preserving non-zero order.
//
// Example:
// [0, 1, 0, 3, 12] -> [1, 3, 12, 0, 0]

function move_zeros(arr) {
    let result = [];
    let zeroCount = 0;

    // Store non-zero values and count zeros.
    for (let num of arr) {
        if (num === 0) {
            zeroCount++;
        } else {
            result.push(num);
        }
    }

    // Add all zeros at the end.
    while (zeroCount > 0) {
        result.push(0);
        zeroCount--;
    }

    return result;
}

module.exports = { move_zeros };
