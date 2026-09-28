// Question 2: Count Even Numbers
// Count how many even numbers are present in an array.
//
// Example:
// [1, 2, 4, 7, 9, 10] -> 3

function count_even_numbers(arr) {
    // This variable stores the number of even elements.
    let count = 0;

    // Check every number in the array.
    for (let num of arr) {
        // A number is even when remainder after division by 2 is 0.
        if (num % 2 === 0) {
            count++;
        }
    }

    return count;
}

module.exports = { count_even_numbers };
