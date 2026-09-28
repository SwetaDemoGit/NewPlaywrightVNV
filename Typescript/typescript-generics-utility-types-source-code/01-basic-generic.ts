function identity<T>(value: T): T {
  return value;
}

console.log(identity(100));
console.log(identity("Hello"));
console.log(identity(true));
