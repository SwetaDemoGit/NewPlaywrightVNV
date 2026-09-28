// Question 26: Valid Parentheses
// Check whether (), {}, and [] are correctly balanced.
//
// Example:
// "{[()]}" -> true
// "{[(])}" -> false
//
// Approach:
// Use a stack. The most recently opened bracket must close first.

function is_valid_parentheses(str) {
    let stack = [];

    // For every closing bracket, store the bracket it must match.
    let pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of str) {

        // Opening brackets are pushed onto the stack.
        if (
            char === '(' ||
            char === '{' ||
            char === '['
        ) {
            stack.push(char);
        } else {

            // There must be an opening bracket to match this closing bracket.
            if (
                stack.length === 0 ||
                stack.pop() !== pairs[char]
            ) {
                return false;
            }
        }
    }

    // Stack must be empty when all brackets are balanced.
    return stack.length === 0;
}

module.exports = { is_valid_parentheses };
