# Asynchronous JavaScript

## Topics
1. Synchronous vs Asynchronous JavaScript
2. Callbacks
3. Callback Hell
4. Promises
5. Promise States
6. `.then()`, `.catch()`, `.finally()`
7. Promise Chaining
8. Async/Await
9. Error Handling
10. Event Loop
11. Non-blocking I/O
12. Promise.all()
13. Best Practices

---

## 1. Synchronous vs Asynchronous JavaScript

Synchronous code executes one statement at a time. JavaScript waits for the current operation to finish before moving to the next statement.

```javascript
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");
```

Output:
```text
Step 1
Step 2
Step 3
```

Asynchronous code allows JavaScript to start a task and continue with other work while waiting for that task to complete.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside timeout");
}, 2000);

console.log("End");
```

Output:
```text
Start
End
Inside timeout
```

The timer takes time, but JavaScript does not stop the entire program while waiting.

---

## 2. Why Asynchronous JavaScript Is Needed

Applications often perform operations that take time:

- API calls
- File operations
- Database communication
- Network requests
- Timers

For example:

```text
Application
    ↓
API request
    ↓
Server processes request
    ↓
Response
```

Asynchronous programming allows the application to continue other work while waiting for the response.

---

## 3. Understanding Callbacks

A callback is a function passed to another function so that it can be executed later.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Greeting completed");
}

greet("Rahul", finish);
```

Output:
```text
Hello Rahul
Greeting completed
```

`finish` is the callback. The `greet()` function decides when to execute it.

Callbacks are especially useful when an operation completes at a later time.

---

## 4. Callback Hell

Callbacks work well for simple operations. Problems can occur when many asynchronous operations depend on each other.

```javascript
getUser(function (user) {
    getOrders(user, function (orders) { //1st CB
        getPayment(orders, function (payment) {
            processPayment(payment, function (result) {
                console.log(result);
            });
        });
    });
});
```
"Each operation needs the result of the previous operation, so we pass a callback that will run when that operation finishes. Because these callbacks are nested inside one another, the code becomes difficult to read and maintain

Deep nesting makes code harder to read and maintain.

This situation is commonly called **Callback Hell**.

Promises provide a cleaner way to handle such workflows.

getUser
   ↓
 callback
   ↓
 getOrders
    ↓
   callback
      ↓
    getPayment
       ↓
      callback
         ↓
      processPayment
          ↓
        callback

---

## 5. Promises

A Promise represents the eventual result of an asynchronous operation.

A simple way to explain it:

> A Promise says that a result will be available later.

```text
API Request
     ↓
   Promise
     ↓
  Waiting
     ↓
Success / Failure
```

---

## 6. Promise States

A Promise is an object that represents the future result of an asynchronous operation.
The result may not be available right now.
A Promise has three states.

### Pending

The operation is still in progress.

### Fulfilled

The operation completed successfully.

### Rejected

The operation failed.

The lifecycle is:

```text
             ┌──→ Fulfilled
Pending ─────┤
             └──→ Rejected
```

Once fulfilled or rejected, the Promise is settled.

---

## 7. Creating a Promise

A Promise can be created using `new Promise()`.

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});
```

- `resolve()` indicates success.
- `reject()` indicates failure.

---

## 8. `.then()`

`.then()` handles a fulfilled Promise.

```javascript
const promise = Promise.resolve("Data received");

promise.then((data) => {
    console.log(data);
});
```

Output:
```text
Data received
```

The value supplied to `resolve()` becomes the value received by `.then()`.

---

## 9. `.catch()`

`.catch()` handles a rejected Promise.

```javascript
const promise = Promise.reject("Something went wrong");

promise.catch((error) => {
    console.log(error);
});
```

Output:
```text
Something went wrong
```

Simple rule:

```text
.then()  → success
.catch() → failure
```

---

## 10. `.finally()`

`.finally()` executes after the Promise settles, whether it succeeds or fails.

```javascript
Promise.resolve("Success")
    .then((result) => {
        console.log(result);
    })
    .finally(() => {
        console.log("Operation completed");
    });
```

A common use is cleanup, such as stopping a loading indicator.

---

## 11. Promise Chaining

Promise chaining connects multiple `.then()` calls.

```javascript
Promise.resolve(10)
    .then((number) => {
        return number * 2;
    })
    .then((result) => {
        return result + 5;
    })
    .then((finalResult) => {
        console.log(finalResult);
    });
```

Output:
```text
25
```

Flow:

```text
10
 ↓
20
 ↓
25
```

Each `.then()` receives the value returned by the previous `.then()`.

---

## 12. Returning Another Promise

A `.then()` can return another Promise.

```javascript
Promise.resolve(10)
    .then((value) => {
        return Promise.resolve(value * 2);
    })
    .then((value) => {
        console.log(value);
    });
```

Output:
```text
20
```

The next step waits for the returned Promise to settle.

---

## 13. Async Functions

The `async` keyword declares an asynchronous function.

```javascript
async function greet() {
    return "Hello";
}
```

An important rule:

> An `async` function always returns a Promise.

Therefore, the result can be handled using `.then()`:

```javascript
greet().then((message) => {
    console.log(message);
});
```

---

## 14. Await

`await` is used inside an `async` function to wait for a Promise result.

```javascript
function getData() {
    return Promise.resolve("Data received");
}

async function displayData() {
    const data = await getData();
    console.log(data);
}

displayData();
```

Output:
```text
Data received
```

`await` makes asynchronous code easier to read because it can be written in a sequential-looking style.

---

## 15. Async/Await vs Promise Chaining

Promise chaining:

```javascript
getData()
    .then((data) => {
        return processData(data);
    })
    .then((result) => {
        console.log(result);
    });
```

Async/await:

```javascript
async function process() {
    const data = await getData();
    const result = await processData(data);

    console.log(result);
}
```

Both approaches handle asynchronous operations. `async/await` is often easier to read when several operations happen sequentially.

---

## 16. Error Handling with Promises

Asynchronous operations can fail.

Use `.catch()` to handle rejected Promises.

```javascript
Promise.reject("Request failed")
    .catch((error) => {
        console.log("Error:", error);
    });
```

Output:
```text
Error: Request failed
```

---

## 17. Error Handling with Async/Await

`try...catch` is commonly used with `async/await`.

```javascript
async function getData() {
    try {
        const result = await Promise.reject("Request failed");
        console.log(result);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();
```

The basic structure is:

```text
try
 ↓
Run asynchronous operation
 ↓
Success → continue
Failure → catch
```

---

## 18. Event Loop

The Event Loop helps JavaScript handle asynchronous work while continuing normal execution.

JavaScript executes synchronous code using the **Call Stack**.

Consider:

```javascript
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

console.log("3");
```

Output:

```text
1
3
2
```

The timer callback does not execute immediately.

Simplified flow:

```text
console.log("1")
      ↓
prints 1

setTimeout()
      ↓
timer is registered

console.log("3")
      ↓
prints 3

Current synchronous work finishes
      ↓
queued callback becomes ready to run
      ↓
prints 2
```

---

## 19. Simplified Event Loop Model

```text
              JavaScript
             Call Stack
                 |
                 ↓
        Runtime / APIs
                 |
                 ↓
              Queue
                 |
                 ↓
             Event Loop
                 |
                 ↓
             Call Stack
```

The runtime handles asynchronous operations. When the operation is ready, its callback or continuation can be queued. The Event Loop helps move ready work to the Call Stack when it is available.

---

## 20. Non-Blocking I/O

I/O means Input/Output.

Examples:

- Reading files
- Writing files
- Network requests
- Database communication

These operations may take time.

Non-blocking I/O means the program does not have to stop all other work while waiting for an I/O operation to complete.

Conceptually:

```text
Start I/O operation
       ↓
Continue other work
       ↓
I/O completes
       ↓
Handle result
```

This model is especially important in Node.js applications.

---

## 21. Blocking vs Non-Blocking

### Blocking

```text
Start operation
      ↓
Wait
      ↓
Operation finishes
      ↓
Continue
```

### Non-Blocking

```text
Start operation
      ↓
Continue other work
      ↓
Operation finishes later
      ↓
Handle result
```

---

## 22. Promise.all()

`Promise.all()` is useful when multiple asynchronous operations are independent and can be started together.

```javascript
const [user, products] = await Promise.all([
    getUser(),
    getProducts()
]);
```

Conceptually:

```text
        ┌──→ getUser()
Start ──┤
        └──→ getProducts()

Both complete
      ↓
Continue
```

If one Promise rejects, `Promise.all()` rejects.

---

## 23. Best Practices

### Prefer `async/await` for readable sequential workflows

```javascript
async function process() {
    const user = await getUser();
    const orders = await getOrders(user);

    console.log(orders);
}
```

### Handle errors

Use `.catch()` with Promise chains or `try...catch` with `async/await`.

### Avoid deep callback nesting

When callbacks become heavily nested, use Promises or `async/await`.

### Do not forget `await`

If an asynchronous function returns a Promise and the resolved value is required:

```javascript
const data = await getData();
```

### Use `Promise.all()` for independent operations

If operations do not depend on each other, they can often be started together.

### Keep asynchronous code readable

Use meaningful function names and divide complex workflows into smaller functions.

---

## 24. Quick Summary

| Concept | Meaning |
|---|---|
| Synchronous | Executes one operation at a time and waits |
| Asynchronous | Allows other work while waiting |
| Callback | Function executed later |
| Callback Hell | Excessive nested callbacks |
| Promise | Represents a future result |
| Pending | Promise is still in progress |
| Fulfilled | Promise completed successfully |
| Rejected | Promise failed |
| `.then()` | Handles successful result |
| `.catch()` | Handles failure |
| `.finally()` | Runs after the Promise settles |
| Promise Chaining | Connects multiple asynchronous operations |
| `async` | Makes a function return a Promise |
| `await` | Waits for a Promise result inside an async function |
| Event Loop | Coordinates queued asynchronous work with JavaScript execution |
| Non-blocking I/O | Allows other work while I/O is in progress |
| `Promise.all()` | Handles independent Promises together |
