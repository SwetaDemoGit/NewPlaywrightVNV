# Regular Expressions in JavaScript

## 1. Introduction to Regular Expressions

A Regular Expression (Regex) is a pattern used to find, match, or check text.

Example:

```javascript
const pattern = /JavaScript/;
console.log(pattern.test("I am learning JavaScript")); // true
```

`/JavaScript/` is the pattern. `test()` checks whether the pattern matches the string.

### Common uses
- Checking phone numbers
- Checking usernames
- Checking PIN codes
- Finding specific words
- Checking whether text contains numbers
- Validating form data

---

## 2. Basic Regular Expression Syntax

### Regex literal

```javascript
const pattern = /hello/;
```

General syntax:

```text
/pattern/
```

Example:

```javascript
const pattern = /cat/;

console.log(pattern.test("I have a cat")); // true
console.log(pattern.test("I have a dog")); // false
```

### Character classes

`[abc]` matches `a`, `b`, or `c`.

```javascript
const pattern = /[abc]/;

console.log(pattern.test("apple")); // true
console.log(pattern.test("dog"));   // false
```

`[0-9]` matches a digit:

```javascript
const pattern = /[0-9]/;
console.log(pattern.test("Hello 5")); // true
console.log(pattern.test("Hello"));   // false
```

`[a-z]` matches lowercase letters.

`[A-Z]` matches uppercase letters.

### Character shortcuts

| Regex | Meaning |
|---|---|
| `\d` | Any digit |
| `\w` | Letter, number, or `_` |
| `\s` | Space or whitespace |

Examples:

```javascript
/\d/.test("abc5");        // true
/\w/.test("Hello");       // true
/\s/.test("Hello World"); // true
```

### Quantifiers

Quantifiers specify how many times a character or pattern should occur.

#### `+` — one or more

```javascript
/\d+/.test("123"); // true
/\d+/.test("abc"); // false
```

#### `*` — zero or more

```javascript
/go*/.test("g");    // true
/go*/.test("go");   // true
/go*/.test("gooo"); // true
```

#### `?` — zero or one

```javascript
/colou?r/.test("color");  // true
/colou?r/.test("colour"); // true
```

#### `{n}` — exact number

```javascript
/\d{4}/.test("2026"); // true
```

#### `{n,m}` — range

```javascript
/\d{3,5}/.test("123");    // true
/\d{3,5}/.test("12345");  // true
/\d{3,5}/.test("12");     // false
```

### Anchors

`^` means beginning of the string.

`$` means end of the string.

Example:

```javascript
/^\d{10}$/
```

This means the entire string must contain exactly 10 digits.

```javascript
const phonePattern = /^\d{10}$/;

console.log(phonePattern.test("9876543210"));  // true
console.log(phonePattern.test("98765"));       // false
console.log(phonePattern.test("98765432101")); // false
console.log(phonePattern.test("98765abc10"));  // false
```

### OR operator

`|` means OR.

```javascript
/cat|dog/.test("I have a cat"); // true
/cat|dog/.test("I have a dog"); // true
```

### Groups

Parentheses `()` group parts of a pattern.

```javascript
/(ha)+/.test("hahaha"); // true
```

### Flags

| Flag | Meaning |
|---|---|
| `i` | Case-insensitive |
| `g` | Global matching |

Example:

```javascript
/hello/i.test("HELLO"); // true
```

Global example:

```javascript
"cat dog cat cat".match(/cat/g);
// ["cat", "cat", "cat"]
```

---

## 3. Using RegExp Objects

JavaScript provides the built-in `RegExp` object.

### Constructor

```javascript
const pattern = new RegExp("hello");

console.log(pattern.test("hello world")); // true
```

### Regex literal vs constructor

```javascript
const pattern1 = /hello/;
const pattern2 = new RegExp("hello");
```

Both create regular expressions.

When using a backslash with the constructor, it is usually escaped because the pattern is supplied as a JavaScript string:

```javascript
const pattern1 = /\d/;
const pattern2 = new RegExp("\\d");
```

### `test()`

Returns `true` or `false`.

```javascript
const pattern = /\d/;

console.log(pattern.test("Hello 5")); // true
console.log(pattern.test("Hello"));   // false
```

### `exec()`

Returns information about the match.

```javascript
const pattern = /cat/;
const result = pattern.exec("I have a cat");

console.log(result);
```

The result contains information such as the matched text, its position, and the original input.

---

## 4. String Methods with Regular Expressions

### `match()`

Returns matching text.

```javascript
const text = "cat dog cat";

console.log(text.match(/cat/g));
// ["cat", "cat"]
```

### `search()`

Returns the position of the first match.

```javascript
const text = "Hello JavaScript";

console.log(text.search(/JavaScript/));
```

### `replace()`

Uses a pattern to replace text.

```javascript
const message = "I like cats";

const result = message.replace(/cats/, "dogs");

console.log(result);
// I like dogs
```

Flags can be combined:

```javascript
const message = "Hello HELLO hello";

const result = message.replace(/hello/gi, "Hi");

console.log(result);
// Hi Hi Hi
```

---

## 5. Validating Data with Regular Expressions

Regex is commonly used for simple form validation.

### Username

Requirement: letters and numbers only, 5–10 characters.

```javascript
const usernamePattern = /^[A-Za-z0-9]{5,10}$/;

console.log(usernamePattern.test("user123"));  // true
console.log(usernamePattern.test("abc"));      // false
console.log(usernamePattern.test("user@123")); // false
```

Breakdown:

```text
^               beginning
[A-Za-z0-9]     letters or numbers
{5,10}          5 to 10 characters
$               end
```

### Phone number

Requirement: exactly 10 digits.

```javascript
const phonePattern = /^\d{10}$/;

console.log(phonePattern.test("9876543210")); // true
console.log(phonePattern.test("98765abc10")); // false
```

### PIN code

Requirement: exactly 6 digits.

```javascript
const pinPattern = /^\d{6}$/;

console.log(pinPattern.test("560001")); // true
console.log(pinPattern.test("5600"));   // false
console.log(pinPattern.test("5600ab")); // false
```

### Name

Requirement: letters only.

```javascript
const namePattern = /^[A-Za-z]+$/;

console.log(namePattern.test("Rahul"));    // true
console.log(namePattern.test("Rahul123")); // false
console.log(namePattern.test("Rahul@"));   // false
```

### Basic email

A basic email-format pattern:

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

console.log(emailPattern.test("student@example.com")); // true
console.log(emailPattern.test("student@example"));     // false
```

This is a basic format check, not a complete specification of every possible valid email address.

### Password length

Requirement: at least 8 characters.

```javascript
const passwordPattern = /^.{8,}$/;

console.log(passwordPattern.test("Hello123")); // true
console.log(passwordPattern.test("Hello"));    // false
```

### Complete validation example

```javascript
const usernamePattern = /^[A-Za-z0-9]{5,10}$/;
const phonePattern = /^\d{10}$/;
const pinPattern = /^\d{6}$/;

const username = "user123";
const phone = "9876543210";
const pin = "560001";

console.log("Username:", usernamePattern.test(username));
console.log("Phone:", phonePattern.test(phone));
console.log("PIN:", pinPattern.test(pin));
```

---

## 6. Best Practices

### Keep Regex simple

Use the simplest pattern that satisfies the requirement.

### Use meaningful variable names

Prefer:

```javascript
const phonePattern = /^\d{10}$/;
```

instead of:

```javascript
const r = /^\d{10}$/;
```

### Test different inputs

Test valid values, invalid values, and edge cases.

For a phone pattern, try:

```text
9876543210
98765
98765432101
98765abc10
""
```

### Use anchors for complete validation

This:

```javascript
/\d{10}/
```

can find 10 digits inside a larger string.

This:

```javascript
/^\d{10}$/
```

requires the entire string to contain exactly 10 digits.

### Use normal string methods when appropriate

If you only need to check whether text contains a word:

```javascript
text.includes("JavaScript");
```

may be clearer than:

```javascript
/JavaScript/.test(text);
```

### Validate important data on the server too

Client-side Regex validation provides immediate feedback, but important data should also be validated on the server.

---

## 7. Regex Cheat Sheet

| Regex | Meaning |
|---|---|
| `/hello/` | Find `hello` |
| `/[abc]/` | `a`, `b`, or `c` |
| `/[0-9]/` | Any digit |
| `/[a-z]/` | Lowercase letter |
| `/[A-Z]/` | Uppercase letter |
| `/\d/` | Digit |
| `/\w/` | Letter, number, or `_` |
| `/\s/` | Space/whitespace |
| `/a+/` | One or more `a` |
| `/a*/` | Zero or more `a` |
| `/a?/` | Zero or one `a` |
| `/a{3}/` | Exactly 3 `a`s |
| `/a{3,5}/` | 3 to 5 `a`s |
| `/^abc/` | Starts with `abc` |
| `/abc$/` | Ends with `abc` |
| `/cat|dog/` | `cat` OR `dog` |
| `/hello/i` | Case-insensitive |
| `/hello/g` | Global matching |
