//frequency of characters in a string
const text = "hello";
const frequency = {};

for (const char of text) {
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}

for (const char in frequency) {
  console.log(`${char}:${frequency[char]}`);
}