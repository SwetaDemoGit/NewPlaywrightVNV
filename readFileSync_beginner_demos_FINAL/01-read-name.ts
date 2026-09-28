const fs = require("fs"); //built-in Node.js module.file system module. It allows you to work with the file system on your computer.


const name = fs.readFileSync(0, "utf8");//read input from the user
//0 represents standard input (stdin).

console.log("Hello " + name);

//Control + D is used to signal the end of input in Unix-like systems, while Control + Z is used in Windows.
//control + Z

// enetered input is string due to the "utf8" 
// encoding specified in the readFileSync function.
