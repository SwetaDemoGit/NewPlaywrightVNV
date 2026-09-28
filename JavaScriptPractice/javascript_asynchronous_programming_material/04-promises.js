//A Promise is an object that represents the result of an 
// asynchronous operation 
// that will be available now, later, or may fail.

const promise = new Promise((resolve, reject) => {
    const success = true; // Change this to true to simulate success

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Error:", error));
