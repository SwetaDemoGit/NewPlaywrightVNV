function getData() {
    return Promise.resolve("Data received");
} //this function returns a Promise that resolves with the string "Data received".

async function displayData() {
    const data = await getData();
    console.log(data);
}

//async is used to create an asynchronous function,
//  and await is used to wait for a Promise result 
// inside that function.


// The displayData function is an asynchronous 
// function that uses the await keyword to wait for 
// the Promise returned by getData() to resolve. 
// Once the Promise resolves, it logs the resolved value 
// ("Data received") to the console.

displayData();

async function greet() {
    return "Hello";
}

greet().then((message) => console.log(message));

//`getData()` returns a Promise, and `await` waits 
// for that Promise 
// to complete and gives us `"Data received"`.
//An `async` function always returns a Promise, 
// even when it returns a normal value like `"Hello"`.
//We can handle that Promise using either 
// `await` or `.then()`.
//So, `async/await` is a simpler and cleaner way 
// to work with Promises.
