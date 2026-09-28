// List of usernames
let usernames = ["alex", "ryan", "mona", "chris"];

// Sort usernames based on their last character
usernames.sort(function(a, b) {

    // Get the last character of username a
    let lastA = a[a.length - 1];

    // Get the last character of username b
    let lastB = b[b.length - 1];

    // Compare the last characters
    // -1 → a comes first
    //  1 → b comes first
    if (lastA > lastB) {
        return 1;
    } else {
        return -1;
    }
});

// Display the sorted usernames
console.log(usernames.join(" "));


    // Iteration 1:
    // a = "alex", b = "ryan"
    // Last characters: x, n
    // x > n → return 1
    // So ryan comes before alex
    // ryan alex mona chris

    // Iteration 2:
    // a = "ryan", b = "mona"
    // Last characters: n, a
    // n > a → return 1
    // So mona comes before ryan
    //mona ryan alex chris

    // Iteration 3:
    // a = "alex", b = "chris"
    // Last characters: x, s
    // x > s → return 1
    // So chris comes before alex
    //mona ryan chris alex

    // sort() continues comparing elements. 
    // sort() internally handles the comparisons and rearrangement.