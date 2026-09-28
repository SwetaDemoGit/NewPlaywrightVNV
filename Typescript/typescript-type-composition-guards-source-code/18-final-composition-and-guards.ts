interface Developer {
  type: "developer";
  name: string;
  programmingLanguage: string;
}

interface Manager {
  type: "manager";
  name: string;
  teamSize: number;
}

type Employee = Developer | Manager;

function displayEmployee(employee: Employee): void {
  if (employee.type === "developer") {
    console.log(`Developer: ${employee.name}`);
    console.log(`Language: ${employee.programmingLanguage}`);
  } else {
    console.log(`Manager: ${employee.name}`);
    console.log(`Team Size: ${employee.teamSize}`);
  }
}

const developer: Employee = {
  type: "developer",
  name: "John",
  programmingLanguage: "TypeScript"
};

const manager: Employee = {
  type: "manager",
  name: "Mary",
  teamSize: 8
};

displayEmployee(developer);
displayEmployee(manager);
