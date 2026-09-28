# JavaScript / ECMAScript + TypeScript / OOP — 30 Solutions

This package contains one solution file per question.

## Folder structure

- `javascript/` — Questions 1–20
- `typescript/` — Questions 21–30
- `tsconfig.json` — TypeScript compiler configuration
- `package.json` — helper scripts and TypeScript dev dependency

## Run JavaScript solutions

Example:

```bash
node javascript/q01.js
```

## Run TypeScript solutions

Install TypeScript:

```bash
npm install
```

Compile all TypeScript files:

```bash
npm run build
```

Then run the generated JavaScript:

```bash
node dist/q21.js
```

You can also run a single TypeScript file with `npx ts-node` if `ts-node` is installed separately.

## Notes

- Q5 finds the second-largest distinct number without sorting.
- Q9 ignores case when counting words.
- Q10 ignores spaces/punctuation and case before checking anagrams.
- Q14 returns unique common values.
- Q18 requires exactly 10 digits.
- Q19 validates `DD-MM-YYYY` format and basic day/month ranges using regex; it does not perform full calendar validation.
- Q20 validates a simple opening HTML tag such as `<div>` or `<my-tag>`.
- Q21–30 demonstrate interfaces/classes, inheritance, overriding, polymorphism, encapsulation, validation, and static members.
