function getFirst<T>(items: T[]): T {
  return items[0];
}

console.log(getFirst([10, 20, 30]));
console.log(getFirst(["John", "Mary", "Alex"]));
