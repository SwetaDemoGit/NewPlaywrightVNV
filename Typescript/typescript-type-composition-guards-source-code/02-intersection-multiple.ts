interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

interface Developer {
  programmingLanguage: string;
}

type DeveloperDetails = Person & Employee & Developer;

const developer: DeveloperDetails = {
  name: "John",
  employeeId: 101,
  programmingLanguage: "TypeScript"
};

console.log(developer);
