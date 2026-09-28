function display(value: string | string[]): void {
  if (Array.isArray(value)) {
    console.log("Array:", value);
  } else {
    console.log("String:", value);
  }
}

display("Hello");
display(["A", "B", "C"]);
