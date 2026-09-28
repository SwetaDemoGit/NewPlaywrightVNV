// Q16. Group by Length
const words = ["cat", "dog", "apple", "mango"];
const groups = {};

for (const word of words) {
  const length = word.length;

  if (!groups[length]) {
    groups[length] = [];
  }

  groups[length].push(word);
}

for (const length in groups) {
  console.log(`${length} -> ${groups[length].join(" ")}`);
}
