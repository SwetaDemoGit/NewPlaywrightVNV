// Question 9: Palindrome
// Return true when a string reads the same forward and backward.
//
// Example:
// "madam" -> true
// "hello" -> false

function is_palindrome(str) {
    let left = 0;
    let right = str.length - 1;

    // Compare characters from both ends moving towards the middle.
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

module.exports = { is_palindrome };
