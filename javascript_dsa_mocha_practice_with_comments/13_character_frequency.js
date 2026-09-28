// Question 13: Character Frequency
// Return an object containing the count of every character.
//
// Example:
// "banana" -> { b: 1, a: 3, n: 2 }

function character_frequency(str) {
    let frequency = {};

    // Use the character as the object key and its count as the value.
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

module.exports = { character_frequency };
