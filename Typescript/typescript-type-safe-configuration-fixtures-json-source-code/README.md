# TypeScript – Type-safe Configuration, Fixtures & JSON Handling

Beginner-friendly source code for the topic.

## Examples

- 01 – Basic configuration
- 02 – Type-safe configuration
- 03 – JSON.parse()
- 04 – JSON.stringify()
- 05 – Type-safe JSON
- 06 – User fixture
- 07 – JSON fixture
- 08 – Multiple fixtures
- 09 – Configuration JSON fixture
- 10 – Complete example

## Run

Install TypeScript if needed:

    npm install -g typescript

Compile all examples:

    tsc

Run an example:

    node dist/01-basic-configuration/index.js

Or compile one file directly:

    tsc 01-basic-configuration/index.ts --target ES2020 --module commonjs
    node 01-basic-configuration/index.js

## Important

`JSON.parse(data) as User` is a type assertion. It helps TypeScript understand the expected shape, but it does not perform runtime validation.
