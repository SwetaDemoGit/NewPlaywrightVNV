interface Dog {
  name: string;

  bark(): void;
}

interface Cat {
  name: string;

  meow(): void;
}

type Animal = Dog | Cat;

const dog: Animal = {
  name: "Bruno",

  bark() {
    console.log("Woof");
  }
};

const cat: Animal = {
  name: "Kitty",

  meow() {
    console.log("Meow");
  }
};

console.log(dog);
console.log(cat);
