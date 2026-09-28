let sentence = "Sooo excited for this cooool event yesss absolutely";

let words = sentence.split(" ");
let result = [];

for (let word of words) {

    let hasRepeated = false;

    // Check each character in the word
    for (let i = 0; i < word.length - 2; i++) {

        // Check if 3 consecutive characters are the same
        if (word[i] === word[i + 1] && word[i] === word[i + 2]) {
            hasRepeated = true;
            break;
        }
    }

    // Keep the word only if it does not have 3 repeated characters
    if (!hasRepeated) {
        result.push(word);
    }
}

console.log(result.join(" "));

    /*
    Example: word = "Sooo"

    Index:  0   1   2   3
    Char:   S   o   o   o

    Iteration 1: i = 0
    word[0] = S
    word[1] = o
    word[2] = o

    S === o && S === o
    false → move to next iteration


    Iteration 2: i = 1
    word[1] = o
    word[2] = o
    word[3] = o

    o === o && o === o
    true → 3 consecutive characters found

    hasRepeated = true
    break → stop checking this word
    */
