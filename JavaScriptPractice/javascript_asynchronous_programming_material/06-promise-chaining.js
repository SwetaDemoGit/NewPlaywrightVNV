Promise.resolve(10)
    .then((number) => number * 2)
    .then((result) => result + 5)
    .then((finalResult) => console.log("Final result:", finalResult))
    .catch((error) => console.log("Error:", error));

Promise.resolve(10)
    .then((value) => Promise.resolve(value * 2))
    .then((value) => console.log("Returned Promise result:", value));


//Promise.resolve(10) starts with the value 10.
//First .then() receives 10, multiplies it by 2, and returns 20.
//The next .then() receives 20, adds 5, and returns 
// 25, which is finally printed.