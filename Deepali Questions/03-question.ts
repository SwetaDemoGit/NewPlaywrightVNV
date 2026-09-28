const fs = require("fs");

class Library {
    private books: number = 0;

    addBook(amount: number): void {
        if (amount > 0) {
            this.books += amount;
        }
    }

    borrowBook(amount: number): void {
        if (amount <= this.books) {
            this.books -= amount;
        }
    }

    getBooks(): number {
        return this.books;
    }
}

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let n = Number(input[0]);

let library = new Library();

let index = 1;

for (let i = 0; i < n; i++) {

    let operation = input[index];

    if (operation === "add") {
        let amount = Number(input[index + 1]);
        library.addBook(amount);
        index += 2;

    } else if (operation === "borrow") {
        let amount = Number(input[index + 1]);
        library.borrowBook(amount);
        index += 2;

    } else if (operation === "books") {
        console.log(library.getBooks());
        index++;
    }
}