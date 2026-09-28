const fs = require("fs");

const number = Number(fs.readFileSync(0, "utf8"));

console.log("Number:", number);
