// Parent class
class Animal {
    getType(): string {
        return "Animal";
    }
}

// Child class
class Lion extends Animal {

    // Override parent method
    getType(): string {
        return "Lion";
    }
}

let animals = ["Animal", "Lion", "Lion"];

for (let type of animals) {

    if (type === "Animal") {
        let animal = new Animal();
        console.log(animal.getType());
    } 
    else if (type === "Lion") {
        let lion = new Lion();
        console.log(lion.getType());
    }
}