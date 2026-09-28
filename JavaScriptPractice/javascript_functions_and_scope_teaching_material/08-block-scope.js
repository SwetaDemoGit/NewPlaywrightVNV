// Block Scope
if (true) {
    const message = "Inside block";
    let count = 10;
    console.log(message);
    console.log(count);
}

// console.log(message); // ReferenceError: message is not defined
// console.log(count); // ReferenceError: count is not defined
// var is function scoped, not block scoped.
if (true) {
    var value = 100;
}
console.log("var value:", value);

// message and count are not available outside the block.
