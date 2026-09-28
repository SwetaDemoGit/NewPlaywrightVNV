// Q14. Array Intersection

const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

const intersection = [];

for (const value of first) {
  if (second.includes(value)) {
    intersection.push(value);
  }
}

console.log(intersection.join(" "));