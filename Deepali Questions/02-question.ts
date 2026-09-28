class Car {
    static count: number = 0;

    constructor() {
        Car.count++;
    }

    static getCount(): number {
        return Car.count;
    }
}

const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
//Split the input whenever there is whitespace.

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {

    let carsToPark = Number(input[i]);

    // Create that many Car objects
    for (let j = 0; j < carsToPark; j++) {
        new Car();
    }

    console.log(Car.getCount());
}