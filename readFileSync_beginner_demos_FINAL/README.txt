READFILESYNC BEGINNER DEMOS

Run any TypeScript file:
npx tsx filename.ts

Key idea:
fs.readFileSync(0, "utf8") reads input from the terminal.

0 = standard input (stdin)
utf8 = read the input as text

Multiple inputs:
1 2 3

Use:
.split(" ")
to separate values by spaces.

Use:
.split(/\s+/)
to separate values by spaces, new lines, or tabs.

The examples are arranged from simple input to multiple inputs.
