// Q29. Online Course Counter
class Course {
  private static totalCourses: number = 0;

  constructor(public title: string) {
    Course.totalCourses++;
  }

  static getTotalCourses(): number {
    return Course.totalCourses;
  }
}

new Course("JavaScript");
new Course("TypeScript");
new Course("Node.js");

console.log("Total courses:", Course.getTotalCourses());
