namespace Users {
  export class User {
    constructor(public name: string) {}

    display(): void {
      console.log(this.name);
    }
  }
}

const user = new Users.User("John");

user.display();
