// Default argument with a string
const createMessage = (
    message: string,
    type: string = "INFO"
): string => {
    return `[${type}] ${message}`;
};

console.log(createMessage("Login successful"));
console.log(createMessage("Something went wrong", "ERROR"));
