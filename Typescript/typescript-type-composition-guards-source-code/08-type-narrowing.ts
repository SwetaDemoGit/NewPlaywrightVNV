function print(value: string | number): void {
  if (typeof value === "string") {
    // value is string here
    console.log(value.toUpperCase());
  } else {
    // value is number here
    console.log(value.toFixed(2));
  }
}

print("hello");
print(25);
