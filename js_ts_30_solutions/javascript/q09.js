// Q9. Word Frequency

const sentence = "JavaScript is fun and javascript is powerful";

const words = sentence.toLowerCase().split(" ");

const frequency = {};

for (const word of words) {
  if (frequency[word]) {
    frequency[word]++;
  } else {
    frequency[word] = 1;
  }
}

console.log(frequency);