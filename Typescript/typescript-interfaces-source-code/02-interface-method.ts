// Interface with Method

interface Student {
  name: string;
  age: number;
  display(): void;
}

const student: Student = {
  name: "John",
  age: 20,

  display(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
  }
};

student.display();
