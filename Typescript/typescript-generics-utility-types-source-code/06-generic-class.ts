class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getValue());
console.log(stringBox.getValue());
