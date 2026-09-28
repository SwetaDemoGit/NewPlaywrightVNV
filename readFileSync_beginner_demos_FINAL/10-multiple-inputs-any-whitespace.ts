import * as fs from "fs";

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);


/*\s means whitespace, including:

space " "
new line \n
tab \t

+ means one or more.*/

console.log(input);
