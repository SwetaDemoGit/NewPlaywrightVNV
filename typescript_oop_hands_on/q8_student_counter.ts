class Student {
    static totalStudents: number = 0;

    constructor(public name: string) {
        Student.totalStudents++;
    }

    static getTotalStudents(): number {
        return Student.totalStudents;
    }
}

let student1 = new Student("Ananya");
let student2 = new Student("Karan");
let student3 = new Student("Neha");
let student4 = new Student("Rohit");

console.log(`Total Students: ${Student.getTotalStudents()}`);
