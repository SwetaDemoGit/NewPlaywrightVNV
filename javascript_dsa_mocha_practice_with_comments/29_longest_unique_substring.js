// Question 29: Longest Substring Without Repeating Characters
// Return the length of the longest substring containing unique characters.
//
// Examples:
// "abcabcbb" -> 3
// "bbbbb" -> 1
// "pwwkew" -> 3
//
// Approach:
// Sliding Window + Set.

function longest_unique_substring(str) {
    let set = new Set();

    // left and right represent the current window.
    let left = 0;
    let maximum = 0;

    for (let right = 0; right < str.length; right++) {

        // If the current character already exists,
        // remove characters from the left until it is unique.
        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        // Add the new character to the current window.
        set.add(str[right]);

        // Window length = right - left + 1.
        maximum = Math.max(
            maximum,
            right - left + 1
        );
    }

    return maximum;
}

module.exports = { longest_unique_substring };
