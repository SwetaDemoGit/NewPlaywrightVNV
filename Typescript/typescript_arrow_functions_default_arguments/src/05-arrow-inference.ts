// TypeScript can infer the return type
const subtract = (a: number, b: number) => {
    return a - b;
};

console.log(subtract(20, 5));

// TypeScript understands that the result is a number.
const result = subtract(20, 5);
console.log(result);
