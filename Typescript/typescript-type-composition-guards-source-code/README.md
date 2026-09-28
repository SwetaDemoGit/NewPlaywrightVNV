# TypeScript - Type Composition & Type Guards

This ZIP contains separate examples for the concepts covered in the theory.

## Type Composition
1. Intersection Types
2. Intersection with Multiple Types
3. Union Types
4. Union with Literal Values
5. Union with Objects
6. Type Composition with Interfaces
7. Type Alias Composition
8. Union Function Parameters

## Type Guards
9. typeof Type Guard
10. typeof with Multiple Types
11. Type Narrowing
12. in Type Guard
13. instanceof Type Guard
14. Custom Type Guard
15. Discriminated Unions
16. Nullable Values
17. Array.isArray()

## Final Example
18. Composition + Discriminated Union + Type Guard

## Run the examples

Install TypeScript:

npm install -g typescript

Compile a file:

tsc 01-intersection-basic.ts

Run the generated JavaScript:

node 01-intersection-basic.js

Repeat for any other .ts file.

## Quick Revision

&  -> AND -> Combine types
|  -> OR  -> Allow multiple possible types

typeof        -> Check primitive type
in            -> Check whether a property exists
instanceof    -> Check class instance
Array.isArray -> Check for an array
Custom Guard  -> Create reusable type-checking logic

Type Narrowing -> Convert a broad type into a more specific type
