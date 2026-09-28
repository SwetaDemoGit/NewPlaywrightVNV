const employee = {
    name: "Rahul",

    greet: function () {

        console.log("Regular function:", this.name);

        const arrowFunction = () => {
            console.log("Arrow function:", this.name);
        };

        arrowFunction();
    }
};

employee.greet();

//`employee.greet()` is a regular function call,
//  so `this` refers to the `employee` object.
//The arrow function has no own `this`; it inherits `this` from `greet()`, so it also refers to `employee`.
//Therefore, both functions print `Rahul`.
