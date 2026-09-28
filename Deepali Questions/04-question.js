let k = 2;

let sentence = "Coding challenges are amazing to solve";

let words = sentence.split(" ");
let result = [];

for (let i = 0; i < words.length; i++) {

    // Every 2nd word → replace with its length
    if ((i + 1) % k === 0) {
        result.push(words[i].length);
    } else {
        result.push(words[i]);
    }
}

console.log(result.join(" "));

// index:  0       1           2    3        4   5
// word:   Coding   challenges  are  amazing  to  solve
// position: 1      2           3    4        5   6