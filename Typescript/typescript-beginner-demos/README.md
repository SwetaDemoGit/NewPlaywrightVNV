# TypeScript Beginner Demos

This folder contains simple TypeScript examples for beginners.

## Topics covered

1. Basic types
   - string
   - number
   - boolean
2. Type inference
3. Type assertions
4. Type assertions with HTML elements
5. Custom object types using `type`
6. Objects using custom types
7. Custom types with arrays
8. Arrays of objects
9. Function parameter types
10. Function return types
11. `void`
12. Functions accepting custom object types
13. Function types
14. A small combined example

## Run the code

Make sure TypeScript is installed:

```bash
npm install -g typescript
```

Compile the TypeScript file:

```bash
tsc index.ts
```

This creates `index.js`.

Run the JavaScript file with Node.js:

```bash
node index.js
```

## Important note about the HTML example

The DOM example is commented out because `document` is available in a browser, not in Node.js.

To try it, create an HTML file containing:

```html
<input id="username" value="Rahul">
<script src="index.js"></script>
```

Then uncomment the DOM example in `index.ts` and compile it again.
