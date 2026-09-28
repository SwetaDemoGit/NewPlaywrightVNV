// Closure
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const myFunction = outer();
myFunction();

// Closure with persistent state
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter(); // count =0
console.log(counter());
console.log(counter());
console.log(counter());
