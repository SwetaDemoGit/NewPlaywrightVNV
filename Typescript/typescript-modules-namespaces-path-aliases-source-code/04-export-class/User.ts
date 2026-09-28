export class User {
  constructor(public name: string) {}

  display(): void {
    console.log(this.name);
  }
}
