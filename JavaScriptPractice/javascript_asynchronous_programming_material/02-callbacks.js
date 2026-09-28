function orderFood(callback) {
    console.log("Food ordered");

    callback();
}

function informCustomer() {
    console.log("Food is ready");
}

orderFood(informCustomer);

// // Callback function is a function that is passed as 
// an argument to another function.


function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Greeting completed");
}

greet("Rahul", finish);

// console.log("\nAsync callback:");

// setTimeout(() => {
//     console.log("Task completed");
// }, 2000);

// console.log("Other work continues...");
