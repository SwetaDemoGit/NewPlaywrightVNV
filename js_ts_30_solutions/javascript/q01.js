// Q1. Temperature Analyzer
const temperatures = [32, 28, 35, 21, 30];

let highest = temperatures[0];
let lowest = temperatures[0];

for (const temp of temperatures) {
  if (temp > highest) highest = temp;
  if (temp < lowest) lowest = temp;
}

console.log("Highest:", highest);
console.log("Lowest:", lowest);
