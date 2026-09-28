// Question 8: Reverse a String
// Return the string in reverse order.
// Do not use reverse().
//
// Example:
// "hello" -> "olleh"

function reverse_string(str) {
    let result = "";

    // Read characters from right to left.
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

module.exports = { reverse_string };
