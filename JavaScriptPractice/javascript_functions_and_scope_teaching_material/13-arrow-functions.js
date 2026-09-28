// Arrow Functions
const squareRegular = function (number) {
    return number * number;
};

const squareArrow = (number) => {
    return number * number;
};

const square = number => number * number;

console.log(squareRegular(5));
console.log(squareArrow(5));
console.log(square(5));

const greet = () => {
    console.log("Hello");
};
greet();

const add = (a, b) => a + b;
console.log(add(10, 20));
