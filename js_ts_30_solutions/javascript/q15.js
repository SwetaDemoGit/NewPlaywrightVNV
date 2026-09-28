// Q15. Array Difference

const first = [1, 2, 3, 4, 5];
const second = [3, 5, 7];

const difference = [];

for (const value of first) {
  if (!second.includes(value)) {
    difference.push(value);
  }
}

console.log(difference.join(" "));