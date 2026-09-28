//anagram checker
const first = "listen";
const second = "silent1";

const firstSorted = first.split("").sort().join("");
const secondSorted = second.split("").sort().join("");

if (firstSorted === secondSorted) {
  console.log("Anagram");
} else {
  console.log("Not Anagram");
}