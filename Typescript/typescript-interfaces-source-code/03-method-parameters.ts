// Interface with Method Parameters

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  }
};

console.log(calculator.add(10, 5));
console.log(calculator.subtract(10, 5));
