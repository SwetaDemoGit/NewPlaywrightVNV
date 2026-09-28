function process(value: string | number | boolean): void {
  if (typeof value === "string") {
    console.log("String:", value);
  } else if (typeof value === "number") {
    console.log("Number:", value);
  } else {
    console.log("Boolean:", value);
  }
}

process("Hello");
process(100);
process(true);
