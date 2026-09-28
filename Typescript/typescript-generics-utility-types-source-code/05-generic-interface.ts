interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 100 };
const stringBox: Box<string> = { value: "Hello" };

console.log(numberBox);
console.log(stringBox);
