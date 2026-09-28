interface Dog {
  name: string;
  bark(): void;
}

interface Cat {
  name: string;
  meow(): void;
}

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function makeSound(animal: Dog | Cat): void {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

const dog: Dog = {
  name: "Bruno",
  bark() {
    console.log("Woof");
  }
};

const cat: Cat = {
  name: "Kitty",
  meow() {
    console.log("Meow");
  }
};

makeSound(dog);
makeSound(cat);
