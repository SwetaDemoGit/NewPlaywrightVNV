// Question 12: First Unique Character
// Return the first character that occurs only once.
// Return -1 if no unique character exists.
//
// Example:
// "swiss" -> "w"
// "aabbcc" -> -1

function first_unique_character(str) {
    let frequency = {};

    // First pass: count every character.
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Second pass: preserve original order and find first count of 1.
    for (let char of str) {
        if (frequency[char] === 1) {
            return char;
        }
    }

    return -1;
}

module.exports = { first_unique_character };
