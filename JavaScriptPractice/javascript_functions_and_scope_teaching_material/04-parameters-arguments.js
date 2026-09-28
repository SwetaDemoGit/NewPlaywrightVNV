// Parameters and Arguments
function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(10, 5);
console.log("Area:", area);

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();
greet("Priya");

function addNumbers(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log("Total:", addNumbers(10, 20, 30));

function restDemo(first, second, ...rest) {
    console.log("First:", first);
    console.log("Second:", second);
    console.log("Rest:", rest);
}
restDemo(1, 2, 3, 4, 5);
