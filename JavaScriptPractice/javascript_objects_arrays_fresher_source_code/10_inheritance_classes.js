// 10 - Inheritance using Classes
//
// Classes provide a cleaner syntax for creating objects
// and expressing inheritance.
//
// Under the hood, JavaScript classes use prototypes.

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log("Hello, I am " + this.name);
    }
}

class Student extends Person {
    constructor(name, course) {
        super(name);//calls the parent's constructor.
        this.course = course;
    }

    study() {
        console.log(this.name + " is studying " + this.course);
    }
}

const student = new Student("Rahul", "JavaScript");

student.greet();
student.study();

// Inheritance:
// Student extends Person
//
// Student gets access to Person's methods.
// Student can also have its own methods.
