// Q3. Number Classifier
const numbers = [10, -5, 0, 7, -2];

for (const number of numbers) {
  if (number > 0) {
    console.log(number, "Positive");
  } else if (number < 0) {
    console.log(number, "Negative");
  } else {
    console.log(number, "Zero");
  }
}
