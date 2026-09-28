let text = "Please please help me me quickly Quickly";

let words = text.split(" ");
let result = [];

for (let i = 0; i < words.length - 1; i++) {
    if (words[i].toLowerCase() === words[i + 1].toLowerCase()) {
        if (!result.includes(words[i + 1])) {
            result.push(words[i + 1]);
        }
    }
}

console.log(result.join(" "));