// TypeScript — Object Destructuring
// Hands-on Answers


// Exercise 1 — Basic Destructuring

let student1 = {
    name: "Rahul",
    age: 22,
    city: "Mumbai"
};

let { name: name1, age: age1 } = student1;

console.log("Exercise 1:");
console.log(name1);
console.log(age1);


// Exercise 2 — Product Details

let product2 = {
    name: "Mobile",
    price: 25000,
    brand: "Samsung"
};

let {
    name: productName2,
    price: productPrice2,
    brand: brand2
} = product2;

console.log("Exercise 2:");
console.log(productName2);
console.log(productPrice2);
console.log(brand2);


// Exercise 3 — Extract Only Required Properties

let employee3 = {
    name: "Priya",
    age: 25,
    department: "IT",
    salary: 50000
};

let {
    name: employeeName3,
    department: department3
} = employee3;

console.log("Exercise 3:");
console.log(employeeName3);
console.log(department3);


// Exercise 4 — Rename Variables

let student4 = {
    name: "Anita",
    age: 21
};

let {
    name: studentName4,
    age: studentAge4
} = student4;

console.log("Exercise 4:");
console.log(studentName4);
console.log(studentAge4);


// Exercise 5 — Default Value

let student5 = {
    name: "Rahul",
    age: 22
};

let {
    name: studentName5,
    course = "TypeScript"
} = student5;

console.log("Exercise 5:");
console.log(studentName5);
console.log(course);


// Exercise 6 — TypeScript Object

let student6: {
    name: string;
    age: number;
    city: string;
} = {
    name: "Ravi",
    age: 23,
    city: "Pune"
};

let {
    name: studentName6,
    age: studentAge6,
    city: studentCity6
} = student6;

console.log("Exercise 6:");
console.log(studentName6);
console.log(studentAge6);
console.log(studentCity6);


// Exercise 7 — Calculate Product Total

let product7 = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};

let {
    price: price7,
    quantity: quantity7
} = product7;

let total7: number = price7 * quantity7;

console.log("Exercise 7:");
console.log(total7);


// Exercise 8 — Employee Information

let employee8 = {
    name: "Neha",
    department: "Testing",
    salary: 55000
};

let {
    name: employeeName8,
    department: department8,
    salary: salary8
} = employee8;

console.log("Exercise 8:");
console.log(`Employee: ${employeeName8}`);
console.log(`Department: ${department8}`);
console.log(`Salary: ${salary8}`);


// Exercise 9 — Function with Destructuring

function displayStudent9(
    { name, course }: {
        name: string;
        course: string;
    }
): void {

    console.log(`Name: ${name}`);
    console.log(`Course: ${course}`);
}

let student9 = {
    name: "Rahul",
    course: "TypeScript"
};

console.log("Exercise 9:");
displayStudent9(student9);


// Exercise 10 — Shopping Cart Challenge

let cart10 = {
    product: "Headphones",
    price: 2000,
    quantity: 3
};

let {
    product: product10,
    price: price10,
    quantity: quantity10
} = cart10;

let total10: number = price10 * quantity10;

console.log("Exercise 10:");
console.log(`Product: ${product10}`);
console.log(`Total: ${total10}`);
