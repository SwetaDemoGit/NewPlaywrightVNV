class Dog {
  bark(): void {
    console.log("Woof");
  }
}

class Cat {
  meow(): void {
    console.log("Meow");
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());
