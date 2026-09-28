const employee = {
    name: "Rahul",

    greet: function () {

        console.log("Outer this:", this.name);

        const sayName = () => {
            console.log("Inner this:", this.name);
        };

        sayName();
    }
};

employee.greet();

// When `employee.greet()` is called, the regular function `greet()` 
// gets `this = employee`.
// The arrow functions created inside `greet()` do not have their own `this`.
// They inherit `this` from the surrounding `greet()` function.
// Therefore, both `arrow1` and `arrow2` use `employee` as their `this`.


// employee.greet();

// employee.greet()
//        ↓
// this = employee
//        ↓
//   ┌────┴────┐
//   ↓         ↓
// arrow1    arrow2
//   ↓         ↓
// same this  same this
//   ↓         ↓
// employee   employee