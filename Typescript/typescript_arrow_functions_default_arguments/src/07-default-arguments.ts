// Default argument
const greetUser = (name: string = "Guest"): string => {
    return `Hello, ${name}`;
};

console.log(greetUser("Ronald"));
console.log(greetUser());
