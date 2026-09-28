Promise.resolve("Data received")
    .then((data) => console.log("Data:", data))
    .catch((error) => console.log("Error:", error))
    .finally(() => console.log("Operation completed"));

Promise.reject("Something went wrong")
    .catch((error) => console.log("Handled error:", error))
    .finally(() => console.log("Finished"));


// Promise.resolve() creates a successful Promise with "Data received".
// .then() runs because the Promise was successful, so it prints Data: Data received.
// .catch() is skipped because there is no error.
// .finally() always runs, whether the Promise succeeds or fails.


//Promises are asynchronous. Each step of a Promise 
// chain is scheduled separately in the microtask 
// queue. Therefore, another Promise's callback can
//  execute before the first chain reaches its 
// .finally().