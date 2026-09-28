// Multiple Interfaces

interface Employee {
  name: string;
}

interface Manager {
  manage(): void;
}

class TeamLead implements Employee, Manager {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  manage(): void {
    console.log(`${this.name} is managing the team`);
  }
}

const teamLead = new TeamLead("John");

teamLead.manage();
