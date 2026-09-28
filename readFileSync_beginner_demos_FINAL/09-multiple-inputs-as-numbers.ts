const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(" ");
//an Array of strings

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log(a + b + c);
