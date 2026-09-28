// Q6. Rotate Array
const numbers = [10, 20, 30, 40];

if (numbers.length > 0) {
  const last = numbers.pop();
  numbers.unshift(last);
}

console.log(numbers);
