// Question 19: Longest Common Prefix
// Find the longest prefix shared by all strings.
// Return -1 if there is no common prefix.
//
// Example:
// ["flower", "flow", "flight"] -> "fl"

function longest_common_prefix(strings) {
    if (strings.length === 0) {
        return -1;
    }

    // Start with the first string as the possible prefix.
    let prefix = strings[0];

    // Compare the prefix against every other string.
    for (let i = 1; i < strings.length; i++) {

        // Shorten the prefix until the current string starts with it.
        while (!strings[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);

            

            if (prefix === "") {
                return -1;
            }
        }
    }

    return prefix;
}

module.exports = { longest_common_prefix };
