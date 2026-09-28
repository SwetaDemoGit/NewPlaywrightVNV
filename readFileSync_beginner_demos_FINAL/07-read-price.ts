const fs = require("fs");

const price = Number(fs.readFileSync(0, "utf8"));

console.log("Price:", price);
console.log("Price after adding 100:", price + 100);
