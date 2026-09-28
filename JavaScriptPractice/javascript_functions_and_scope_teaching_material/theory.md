# JavaScript Functions and Scope

## Topics Covered

1. Function Declarations
2. Function Expressions
3. Function Hoisting
4. Parameters and Arguments
5. Default Parameters
6. Rest Parameters
7. Return Statement
8. Global Scope
9. Local / Function Scope
10. Lexical Scope
11. Scope Chain
12. Closures
13. Uses of Closures
14. The `this` Keyword
15. Arrow Functions
16. Best Practices for Functions and Scope

---

## 1. Functions in JavaScript

A function is a reusable block of code designed to perform a specific task.

Functions help to:
- Avoid repeating code
- Organize code into smaller units
- Make code easier to maintain
- Accept input through parameters
- Return results

### Basic Syntax

```javascript
function functionName() {
    // statements
}
```

### Example

```javascript
function greet() {
    console.log("Hello, JavaScript!");
}

greet();
```

### Explanation

- `function` is the keyword used to create a function.
- `greet` is the function name.
- `()` contains parameters, if any.
- `{}` contains the function body.
- `greet()` calls the function.

Output:
```text
Hello, JavaScript!
```

A function executes when it is called.

---

## 2. Function Declarations

A function declaration defines a function using the `function` keyword.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Rahul");
```

Output:
```text
Hello Rahul
```

Here, `name` is a parameter and `"Rahul"` is an argument.

### Key Characteristics

- Uses the `function` keyword.
- Has a function name.
- Can accept parameters.
- Can return a value.
- Function declarations are hoisted.

---

## 3. Function Expressions

A function expression is a function assigned to a variable.

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

The function is stored in the variable `greet`.

### Example with Parameters

```javascript
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));
```

Output:
```text
30
```

---

## 4. Function Declaration vs Function Expression

### Function Declaration

```javascript
function add(a, b) {
    return a + b;
}
```

### Function Expression

```javascript
const add = function (a, b) {
    return a + b;
};
```

Both can perform the same task.

One important difference is hoisting.

| Function Declaration | Function Expression |
|---|---|
| Can be called before declaration | Cannot be called before initialization |
| Uses a named function declaration | Function is assigned to a variable |
| Hoisted | Follows variable initialization rules |

---

## 5. Function Hoisting

Hoisting allows a function declaration to be called before its declaration appears in the source code.

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output:
```text
Hello
```

Function declarations are available before their declaration is reached during normal execution.

### Function Expression and Hoisting

A function expression assigned to `const` cannot be called before the variable is initialized.

```javascript
greet();

const greet = function () {
    console.log("Hello");
};
```

This results in a `ReferenceError`.

---

## 6. Parameters and Arguments

A parameter is a variable defined in the function declaration.

An argument is the actual value passed when the function is called.

```javascript
function add(a, b) {
    return a + b;
}

add(10, 20);
```

Here:
```text
a, b    → Parameters
10, 20  → Arguments
```

### Example

```javascript
function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(10, 5);

console.log(area);
```

Output:
```text
50
```

---

## 7. Default Parameters

A parameter can have a default value.

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet();
```

Output:
```text
Hello Guest
```

When a value is provided:

```javascript
greet("Rahul");
```

Output:
```text
Hello Rahul
```

The default value is used when the argument is not provided or is `undefined`.

---

## 8. Rest Parameters

A rest parameter allows a function to accept multiple arguments.

It uses `...`.

```javascript
function addNumbers(...numbers) {
    console.log(numbers);
}

addNumbers(10, 20, 30, 40);
```

Output:
```text
[10, 20, 30, 40]
```

The `numbers` parameter collects the arguments into an array.

### Example

```javascript
function addNumbers(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(addNumbers(10, 20, 30));
```

Output:
```text
60
```

---

## 9. Return Statement

The `return` statement sends a value from a function back to the code that called it.

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output:
```text
30
```

The flow is:

```text
add(10, 20)
     ↓
10 + 20
     ↓
return 30
     ↓
result = 30
```

---

## 10. Return Stops Function Execution

When JavaScript reaches a `return` statement, the function ends.

```javascript
function checkNumber(number) {
    if (number > 0) {
        return "Positive";
    }

    return "Not positive";
}

console.log(checkNumber(10));
```

Output:
```text
Positive
```

Statements that would execute after the reached `return` are not executed.

---

## 11. Functions Without a Return Value

A function does not always need to return a value.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Rahul");
```

If a function reaches the end without returning a value, its return value is `undefined`.

---

## 12. Global Scope

Scope determines where a variable can be accessed.

A variable declared outside a function is generally in the global scope.

```javascript
const company = "TechCorp";

function displayCompany() {
    console.log(company);
}

displayCompany();
```

Output:
```text
TechCorp
```

The function can access `company` because it is declared in an outer scope.

---

## 13. Local / Function Scope

A variable declared inside a function is available only within that function.

```javascript
function calculate() {
    const result = 100;

    console.log(result);
}

calculate();
```

The following produces an error:

```javascript
function calculate() {
    const result = 100;
}

console.log(result);
```

`result` belongs to the local scope of `calculate()`.

### Simple Rule

```text
Declared outside function → Global / outer scope
Declared inside function  → Local scope
```

---

## 14. Lexical Scope

Lexical scope means that a function can access variables from the scope where the function is written.

```javascript
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();
```

Output:
```text
Hello
```

`inner()` can access `message` because `message` is in its outer lexical scope.

---

## 15. Scope Chain

When JavaScript looks for a variable, it first checks the current scope.

If the variable is not found, it checks the outer scope. This continues until the variable is found or the global scope is reached.

```javascript
const company = "TechCorp";

function outer() {
    const department = "IT";

    function inner() {
        const employee = "Rahul";

        console.log(employee);
        console.log(department);
        console.log(company);
    }

    inner();
}

outer();
```

Inside `inner()`:

```text
employee   → inner scope
department → outer scope
company    → global scope
```

This search process is called the scope chain.

---

## 16. Block Scope

Variables declared with `let` and `const` are block scoped.

```javascript
if (true) {
    const message = "Hello";
    console.log(message);
}
```

`message` is available only inside the block.

The following produces an error:

```javascript
if (true) {
    const message = "Hello";
}

console.log(message);
```

---

## 17. `var`, `let`, and `const` Scope

`var` is function scoped.

`let` and `const` are block scoped.

```javascript
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a);
```

`a` is accessible because `var` is not block scoped.

`b` and `c` are available only inside the block.

### Modern JavaScript Recommendation

```text
const → use when reassignment is not required
let   → use when reassignment is required
var   → generally avoid in modern JavaScript
```

---

## 18. Closures

A closure occurs when a function remembers and continues to access variables from its outer lexical scope.

```javascript
function outer() {
    const message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner;
}

const myFunction = outer(); 

myFunction();
```

Output:
```text
Hello
```

### Step-by-Step

1. `outer()` is called.
2. `message` is created inside `outer()`.
3. `inner()` is created inside `outer()`.
4. `outer()` returns `inner`.
5. `myFunction` now refers to the returned function.
6. When `myFunction()` executes, it can still access `message`.

That preserved access is the essence of a closure.

---

## 19. Closure Example — Counter

Closures can be used to maintain state between function calls.

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:
```text
1
2
3
```

`count` is preserved between calls because the returned function closes over it.

---

---

## 21. Uses of Closures

Closures are commonly used for:

- Private state
- Data encapsulation
- Function factories
- Callbacks
- Maintaining state between function calls

---

## 22. Closure — Function Factory

A function can create another function with customized behavior.

```javascript
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
```

Output:
```text
10
15
```

`double` remembers `multiplier = 2`, while `triple` remembers `multiplier = 3`.

---

## 23. The `this` Keyword

`this` is a special keyword in JavaScript.

When a function is called as an object method, `this` refers to the object that is calling the method.

```javascript
const employee = {
    name: "Rahul",

    greet() {
        console.log("Hello " + this.name);
    }
};

employee.greet();
```

Output:
```text
Hello Rahul
```

Here:

```javascript
this.name
```

refers to:

```javascript
employee.name
```

because the function is called as:

```javascript
employee.greet();
```

### Simple Relationship

```text
employee.greet()
       ↓
     this
       ↓
   employee
```

---

## 24. Another Simple `this` Example

```javascript
const person = {
    name: "Priya",

    introduce() {
        console.log("My name is " + this.name);
    }
};

person.introduce();
```

Output:
```text
My name is Priya
```

Here `this` refers to `person`.

---

## 25. `this` and Arrow Functions

Arrow functions behave differently from regular functions.

An arrow function does not have its own `this`.

It uses `this` from its surrounding scope.

For an object method that needs `this` to refer to the object, use a regular method:

```javascript
const person = {
    name: "Priya",

    greet() {
        console.log(this.name);
    }
};

person.greet();
```

Output:
```text
Priya
```

### Simple Rule

```text
Regular function
→ this depends on how the function is called

Arrow function
→ does not have its own this
→ uses this from the surrounding scope
```

---

## 26. Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

### Regular Function

```javascript
const squareRegular = function (number) {
    return number * number;
};
```

### Arrow Function

```javascript
const squareArrow = (number) => {
    return number * number;
};
```

### Implicit Return

When an arrow function contains a single expression, the value can be returned without writing `return`.

```javascript
const square = number => number * number;

console.log(square(5));
```

Output:
```text
25
```

This is called an **implicit return**.

---

## 27. Arrow Function Syntax

### No Parameters

```javascript
const greet = () => {
    console.log("Hello");
};
```

### One Parameter

Parentheses can be omitted for one parameter:

```javascript
const square = number => number * number;
```

Parentheses can also be used:

```javascript
const square = (number) => number * number;
```

### Multiple Parameters

Parentheses are required:

```javascript
const add = (a, b) => a + b;
```

---

## 28. Best Practices for Functions

### Use meaningful names

Prefer:

```javascript
calculateTotal();
```

over:

```javascript
doSomething();
```

### Keep functions focused

A function should ideally perform one clear task.

Examples:

```text
calculateTotal()
validateUser()
calculateTax()
displayResult()
```

### Use parameters instead of unnecessary global variables

Prefer:

```javascript
function calculateTotal(price, tax) {
    return price + tax;
}
```

### Return values when appropriate

Returning a value makes a function easier to reuse.

### Avoid unnecessarily large functions

Break complex logic into smaller functions.

---

## 29. Best Practices for Scope

- Keep variables in the smallest required scope.
- Prefer `const` when reassignment is not required.
- Use `let` when reassignment is required.
- Avoid unnecessary global variables.
- Prefer `let` and `const` over `var` in modern JavaScript.

Example:

```javascript
function calculate() {
    const result = 100;
    console.log(result);
}
```

The variable is kept inside the function because it is only needed there.

---

## 30. Best Practices for Closures

Use closures when preserving access to outer variables provides a clear benefit.

Common situations include:

- Private state
- Encapsulation
- Function factories
- Persistent state
- Callbacks

Avoid unnecessarily complicated nested closures because they can make code harder to understand.

---

## 31. Best Practices for `this`

- Use regular functions/methods when you want `this` to refer to the object calling the method.
- Use arrow functions when you want to inherit `this` from the surrounding scope.
- Consider how a regular function is being called when determining the value of `this`.

---

## 32. Quick Concept Summary

| Concept | Meaning |
|---|---|
| Function | Reusable block of code |
| Function Declaration | Function created using `function` |
| Function Expression | Function assigned to a variable |
| Parameter | Variable defined in a function |
| Argument | Value passed to a function |
| Default Parameter | Value used when an argument is not provided |
| Rest Parameter | Collects multiple arguments into an array |
| `return` | Sends a value back from a function |
| Global Scope | Scope outside functions/blocks |
| Local Scope | Scope belonging to a function |
| Block Scope | Scope created by a block for `let` and `const` |
| Lexical Scope | Scope based on where code is written |
| Scope Chain | Search through current and outer scopes |
| Closure | Function retaining access to outer variables |
| `this` | Refers to the object/context associated with a function call |
| Arrow Function | Shorter function syntax with lexical `this` |

---

## 33. Conceptual Flow

```text
FUNCTIONS
    |
    +-- Function Declaration
    +-- Function Expression
    +-- Parameters & Arguments
    +-- Return Values
    +-- Arrow Functions
    |
    ↓
SCOPE
    |
    +-- Global Scope
    +-- Local Scope
    +-- Block Scope
    +-- Lexical Scope
    |
    ↓
SCOPE CHAIN
    |
    ↓
CLOSURES
    |
    +-- Private State
    +-- Persistent State
    +-- Function Factories
```

### Closure Relationship

```text
Lexical Scope
     ↓
Function can access outer variables
     ↓
Function is returned/preserved
     ↓
Closure
     ↓
Outer variables remain accessible
```

### `this` Relationship

```text
Regular Function
      ↓
this depends on how it is called

Arrow Function
      ↓
no own this
      ↓
uses surrounding this
```
