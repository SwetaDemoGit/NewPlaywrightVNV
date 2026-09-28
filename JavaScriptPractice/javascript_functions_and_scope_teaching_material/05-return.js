// Return Statement
function add(a, b) {
    return a + b;
}
const result = add(10, 20);
console.log("Result:", result);

function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    }
    return "Not positive";
}
console.log(checkNumber(10));

function greet(name) {
    console.log("Hello " + name);
}
const greetingResult = greet("Rahul");
console.log("Return value:", greetingResult);
