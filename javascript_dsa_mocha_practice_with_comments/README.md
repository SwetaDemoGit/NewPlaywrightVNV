# JavaScript DSA - Mocha Coding Practice

30 DSA problems written in JavaScript function/class format.

Each `.js` file contains:
- Problem title
- Short explanation
- Example
- Commented solution
- `module.exports` for easy Mocha testing

## Topics

1-10   Basic arrays and strings
11-18  Set, frequency maps, and HashMap
19-25  String/array DSA patterns
26     Stack-based parentheses
27     Stack
28     Queue
29     Sliding Window
30     Prefix/Suffix

## Running with Mocha

Install dependencies:

```bash
npm install
```

Then:

```bash
npm test
```

The solution files can also be imported directly into Mocha test files, for example:

```javascript
const assert = require("assert");
const { two_sum } = require("../18_two_sum");

describe("Two Sum", function () {
    it("should find the correct indices", function () {
        assert.deepStrictEqual(
            two_sum([2, 7, 11, 15], 9),
            [0, 1]
        );
    });
});
```
