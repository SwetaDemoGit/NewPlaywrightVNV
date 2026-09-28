// Q5. Second Largest
const numbers = [10, 25, 7, 40, 32, 40];

let largest = -Infinity;
let secondLargest = -Infinity;

for (const number of numbers) {
  if (number > largest) {
    secondLargest = largest;
    largest = number;
  } else if (number > secondLargest && number !== largest) {
    secondLargest = number;
  }
}

if (secondLargest === -Infinity) {
  console.log("Second largest does not exist");
} else {
  console.log("Second largest:", secondLargest);
}
