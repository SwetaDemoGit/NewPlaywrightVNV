# TypeScript - Modules, Namespaces & Path Aliases

This ZIP contains simple demos for the concepts covered in the theory.

## Modules
1. Named export and import
2. Multiple exports
3. Default export
4. Exporting a class
5. Exporting an interface
6. Exporting a type
7. Importing everything with `*`
8. Re-exporting from an index file

## Namespaces
9. Basic namespace
10. Namespace with variables
11. Namespace with classes

## Path Aliases
12. Basic path alias setup
13. Multiple path aliases
14. Complete modules + path aliases demo

## Running a simple module example

From the example folder:

tsc math.ts app.ts
node app.js

For a project using `tsconfig.json`:

tsc
node dist/app.js

The exact output folder depends on the TypeScript configuration.

## Important Notes

- Modern TypeScript applications generally prefer ES modules using `import` and `export`.
- Namespaces are mainly seen in older TypeScript codebases or special cases.
- Path aliases are configured through `tsconfig.json`.
- Path aliases affect TypeScript module resolution. Depending on the runtime/build tool, additional configuration may be needed for runtime resolution.

## Quick Revision

MODULE
  -> Separate code into files
  -> Share code using import/export

NAMESPACE
  -> Group related code under a name

PATH ALIAS
  -> Create shorter and cleaner import paths

Examples:

import { User } from "./models/User";

import { User } from "@models/User";
