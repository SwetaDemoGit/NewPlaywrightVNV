// Q4. Missing Number

const n = 6;
const numbers = [1, 2, 3, 5, 6];

for (let i = 1; i <= n; i++) {

  if (!numbers.includes(i)) {
    console.log("Missing number:", i);
    break;
  }

}