const fs = require("fs");

const number = Number(fs.readFileSync(0, "utf8"));

console.log("Your favorite number is", number);
console.log("Double:", number * 2);
