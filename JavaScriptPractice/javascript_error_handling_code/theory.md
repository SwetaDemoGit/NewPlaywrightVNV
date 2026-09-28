# Error Handling in JavaScript — Theory & Code Guide

## 1. Introduction to Error Handling

Error handling allows JavaScript applications to detect and respond to problems in a controlled way.

Common built-in errors include:
- `SyntaxError` — invalid JavaScript syntax
- `ReferenceError` — accessing something that does not exist
- `TypeError` — performing an invalid operation on a value
- `RangeError` — using a value outside an allowed range

### `01-basic-error.js`
Demonstrates a `ReferenceError` caused by accessing an undeclared variable and handling it with `try-catch`.

### `02-error-object.js`
Shows `error.name` for the error type and `error.message` for the error description.

---

## 2. try-catch-finally

```text
try     → code that may cause an error
catch   → handles the error
finally → executes after try/catch
```

### `03-try-catch.js`
A `TypeError` is generated inside `try`. Execution moves to `catch`, where the message is displayed.

### `04-finally.js`
Demonstrates that `finally` executes whether an error occurs or not. It is commonly used for cleanup.

---

## 3. Throwing Errors

The `throw` keyword allows code to manually generate an error.

```javascript
throw new Error("Something went wrong");
```

It is useful when a function detects invalid data or an invalid business condition.

### `05-throw-error.js`
Uses `throw` for age validation and username validation.

### `06-return-vs-throw.js`
Shows the difference:
- `return` → normal result
- `throw` → error condition

---

## 4. Error Propagation

An error can travel from a called function to the caller until it reaches code that handles it.

### `07-error-propagation.js`
`processOrder()` throws an error. The error moves through `placeOrder()` and is handled by the outer `try-catch`.

Flow:

```text
processOrder()
      ↓
throw error
      ↓
placeOrder()
      ↓
try-catch
      ↓
handle error
```

---

## 5. Custom Errors

Applications can create custom error classes when they need to distinguish between different categories of errors.

Example:

```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}
```

### `08-custom-error.js`
Creates a `ValidationError` for invalid user data.

### `09-instanceof-custom-error.js`
Uses `instanceof` to determine whether the error is a `ValidationError`.

This is useful when an application needs different handling for different error categories.

---

## 6. Validation and Error Handling

Validation checks data before processing it.

### `10-validation.js`
Checks whether a price is negative. If it is invalid, the function throws an error.

Flow:

```text
Receive data
    ↓
Validate
    ↓
Valid → continue
Invalid → throw error
```

---

## 7. Error Handling in Asynchronous JavaScript

Asynchronous operations can also fail.

### `11-async-error-handling.js`
Shows two common approaches:
- `.catch()` for rejected Promises
- `try-catch` with `async/await`

Promise pattern:

```javascript
getData()
    .catch((error) => {
        console.log(error);
    });
```

Async/await pattern:

```javascript
try {
    const data = await getData();
} catch (error) {
    console.log(error);
}
```

---

## 8. Best Practices

### `12-best-practices.js`
Demonstrates:
- Meaningful error messages
- Handling errors instead of silently ignoring them
- Using a custom error type when appropriate

Good:

```javascript
throw new Error("Username is required");
```

Avoid vague messages such as:

```javascript
throw new Error("Error");
```

Do not expose sensitive internal information to application users.

---

## 9. Complete Example

### `13-complete-example.js`

Combines:
- Validation
- `throw`
- `try`
- `catch`
- `finally`
- Meaningful error messages

The `withdraw()` function validates the amount and available balance. If a rule is violated, it throws an error.

The caller handles the error with `catch`, while `finally` runs after the transaction process.

Flow:

```text
withdraw()
    ↓
Validate amount
    ↓
Validate balance
    ↓
Valid → return result
Invalid → throw error
    ↓
catch handles error
    ↓
finally executes
```

---

## 10. Source File Summary

| File | Topic |
|---|---|
| `01-basic-error.js` | Basic error handling |
| `02-error-object.js` | Error name and message |
| `03-try-catch.js` | `try-catch` |
| `04-finally.js` | `finally` |
| `05-throw-error.js` | Throwing errors |
| `06-return-vs-throw.js` | `return` vs `throw` |
| `07-error-propagation.js` | Error propagation |
| `08-custom-error.js` | Custom error class |
| `09-instanceof-custom-error.js` | Identifying custom errors |
| `10-validation.js` | Validation |
| `11-async-error-handling.js` | Async error handling |
| `12-best-practices.js` | Best practices |
| `13-complete-example.js` | Combined example |

## Recommended Teaching Order

```text
Errors
  ↓
try-catch
  ↓
finally
  ↓
throw
  ↓
return vs throw
  ↓
Error propagation
  ↓
Custom Errors
  ↓
instanceof
  ↓
Validation
  ↓
Async Error Handling
  ↓
Best Practices
```
