// Q11. Palindrome Words

const sentence = "madam level apple civic";

const words = sentence.split(" ");

const palindromes = [];

for (const word of words) {

  const reversed = word.split("").reverse().join("");

  if (word === reversed) {
    palindromes.push(word);
  }

}

console.log(palindromes.join(" "));