// 07 - Flow Control: Loops

// for loop
console.log("FOR LOOP");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while loop
console.log("WHILE LOOP");

let count = 1;

while (count <= 5) {
    console.log(count);
    count++;
}

// do...while loop
console.log("DO...WHILE LOOP");

let number = 6;

do {
    console.log(number);
    number++;
} while (number <= 5);

// break
console.log("BREAK EXAMPLE");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}

// continue
console.log("CONTINUE EXAMPLE");

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
