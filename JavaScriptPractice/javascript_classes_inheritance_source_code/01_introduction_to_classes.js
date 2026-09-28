// 01 - Introduction to Classes

// Example 1: Simple class
class Student {
    showDetails() {
        console.log("Student: Amit");
    }
}

const student1 = new Student();
student1.showDetails();



// Example 2: Multiple objects
class StudentInfo {
    showName(name) {
        console.log("Student:", name);
    }
}

const student2 = new StudentInfo();
const student3 = new StudentInfo();

student2.showName("Amit");
student3.showName("Neha");


// Example 3: Product class
class Product {
    displayProduct(name, price) {
        console.log("Product:", name);
        console.log("Price:", price);
    }
}

const product1 = new Product();
product1.displayProduct("Laptop", 50000);
