function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

printLength("Hello");
printLength([10, 20, 30]);

// Error: number does not have a length property.
// printLength(100);
