# Run a TypeScript (.ts) File Directly

## Option 1: Using tsx (recommended for beginners)

Install tsx:

```bash
npm install -D tsx
```

Run the TypeScript file:

```bash
npx tsx app.ts
```

No separate `.js` file is created.

## Option 2: Using Node.js directly

With a recent Node.js version that supports TypeScript type stripping, simple `.ts` files can be run with:

```bash
node app.ts
```

## Option 3: Traditional TypeScript compilation

Compile the TypeScript file:

```bash
npx tsc app.ts
```

This creates:

```text
app.js
```

Then run:

```bash
node app.js
```

## Remember

- `tsx` → runs TypeScript directly
- `tsc` → compiles TypeScript into JavaScript
- `node` → runs JavaScript (and can run supported TypeScript directly in recent Node.js versions)
