// Lexical Scope
function outer() {
    const message = "Hello from outer scope";

    function inner() {
        console.log(message);
    }

    inner();
}
outer();

// Scope chain
const company = "TechCorp";

function outerFunction() {
    const department = "IT";

    function innerFunction() {
        const employee = "Rahul";
        console.log(employee);
        console.log(department);
        console.log(company);
    }

    innerFunction();
}
outerFunction();
