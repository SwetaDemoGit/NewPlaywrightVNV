let name1 : unknown = "Sonal"; // TypeScript infers the type as string
//name1.length; // Error: Object is of type 'unknown'.
if (typeof name1 === "string") {
  console.log(name1.length); // Valid, as name1 is confirmed to be a string
    }


let value  : any = 10; // TypeScript infers the type as number
value = "Hello"; // Valid, as value is of type any
value = true; // Valid, as value is of type any
value = "Bangalore"
console.log(value.length); // Valid, as value is of type any