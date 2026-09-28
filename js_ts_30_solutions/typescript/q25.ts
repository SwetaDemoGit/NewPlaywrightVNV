// Q25. Login Attempts / User Object Counter
class User {
  private static userCount: number = 0;

  constructor(public name: string) {
    User.userCount++;
  }

  static getUserCount(): number {
    return User.userCount;
  }
}

new User("Amit");
new User("Neha");
new User("Ravi");

console.log("Users created:", User.getUserCount());
