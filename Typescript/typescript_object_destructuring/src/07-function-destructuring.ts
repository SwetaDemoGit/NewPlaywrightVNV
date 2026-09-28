// Destructuring in function parameters
//The function expects an object containing name and age,
//  and immediately takes those two values out of the object.

function displayStudent(//"Give me a student object, but I only want its name and age directly."
    { name, age }: { //destructuring the object parameter and specifying its type
        name: string;
        age: number;
    }
): void {

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

let student = { //creating an object with name and age properties
    name: "Rahul",
    age: 22
};

displayStudent(student); //passing the student object to the function, which will destructure it and print the values

// without :
// function displayStudent(student: { name: string; age: number }) {
//     console.log(student.name);
//     console.log(student.age);
// }