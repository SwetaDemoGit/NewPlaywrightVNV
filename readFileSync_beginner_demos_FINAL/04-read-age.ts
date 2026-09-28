const fs = require("fs");

const age = Number(fs.readFileSync(0, "utf8"));

console.log("Next year you will be", age + 1);
