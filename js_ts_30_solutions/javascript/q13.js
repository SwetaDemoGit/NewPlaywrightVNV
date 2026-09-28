// Q13. Capitalize Words
const sentence = "hello world javascript";

const result = sentence
  .split(/\s+/)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(result);
