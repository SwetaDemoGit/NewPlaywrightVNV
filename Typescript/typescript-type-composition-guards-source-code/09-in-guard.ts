interface Dog {
  name: string;
  bark(): void;
}

interface Cat {
  name: string;
  meow(): void;
}

function makeSound(animal: Dog | Cat): void {
  if ("bark" in animal) {
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
