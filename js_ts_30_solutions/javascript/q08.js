// Q8. First Non-Repeated Character

const text = "swiss";

const frequency = {};

// Count characters
for (const char of text) {
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}

// Find first non-repeated character
let result = null;

for (const char of text) {
  if (frequency[char] === 1) {
    result = char;
    break;
  }
}

if (result) {
  console.log(result);
} else {
  console.log("No non-repeated character");
}