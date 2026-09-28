const fs = require("fs");

const city = fs.readFileSync(0, "utf8");

console.log("You live in " + city);
