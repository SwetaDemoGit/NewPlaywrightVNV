function printName(name: string | null): void {
  if (name !== null) {
    console.log(name.toUpperCase());
  } else {
    console.log("No name available");
  }
}

printName("John");
printName(null);
