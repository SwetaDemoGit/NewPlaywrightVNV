// Question 14: Anagram
// Return true if two strings contain the same characters
// with the same frequencies.
//
// Example:
// "listen", "silent" -> true

function is_anagram(str1, str2) {
    // Different lengths cannot be anagrams.
    if (str1.length !== str2.length) {
        return false;
    }

    let frequency = {};

    // Count characters from the first string.
    for (let char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Remove counts using the second string.
    for (let char of str2) {
        if (!frequency[char]) {
            return false;
        }

        frequency[char]--;
    }

    return true;
}

module.exports = { is_anagram };
