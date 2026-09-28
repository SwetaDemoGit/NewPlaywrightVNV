let numbers = [2, 4, 5, 8, 3];

let result = "";

for (let num of numbers) {
    if (numbers.includes(num * 2)) {
        result += "1";
    } else {
        result += " 0";
    }
}

console.log(result);