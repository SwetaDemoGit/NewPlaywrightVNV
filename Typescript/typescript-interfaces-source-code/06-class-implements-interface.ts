// Class Implementing an Interface

interface Employee {
  name: string;
  work(): void;
}

class Developer implements Employee {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  work(): void {
    console.log(`${this.name} is writing code`);
  }
}

const developer = new Developer("John");

developer.work();
