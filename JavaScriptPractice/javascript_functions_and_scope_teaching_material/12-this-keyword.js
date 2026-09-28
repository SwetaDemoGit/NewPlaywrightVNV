// The this Keyword
//this is a special JavaScript keyword that refers to the object or 
// context associated with the current function call.
const employee = {
    name: "Rahul",

    greet() {
        console.log("Hello " + this.name);
    }
};
employee.greet();

const person = {
    name: "Priya",

    introduce() {
        console.log("My name is " + this.name);
    }
};
person.introduce();

