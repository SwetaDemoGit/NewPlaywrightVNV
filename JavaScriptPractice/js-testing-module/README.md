# JavaScript Testing — Fresher Module

This project contains simple hands-on examples for:

- Mocha basics
- Unit testing
- Test suites and test cases
- Assertions
- Positive and negative testing
- AAA pattern
- Asynchronous testing with `done()`
- Promise-based testing
- Async/await testing
- Mocking and stubbing concepts
- Testing best practices

## Setup

```bash
npm install
```

## Run all tests

```bash
npm test
```

or:

```bash
npx mocha
```

## Run a specific test file

```bash
npx mocha test/calculator.test.js
```

## Folder Structure

```text
js-testing-module/
├── package.json
├── README.md
├── calculator.js
├── user.js
├── shopping.js
├── login.js
├── user-service.js
└── test/
    ├── calculator.test.js
    ├── assertions.test.js
    ├── async.test.js
    ├── shopping.test.js
    ├── login.test.js
    └── stubbing.test.js
```
