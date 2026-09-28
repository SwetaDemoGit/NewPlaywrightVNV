class BankAccount {

    // Private property
    #balance = 5000;

    // Getter method
    getBalance() {
        return this.#balance;
    }

    // Setter method
    setBalance(amount) {
        this.#balance = amount;
    }
}

let account = new BankAccount();

// Accessing private balance through public method
console.log(account.getBalance()); // 5000

// Changing private balance through public method
account.setBalance(10000);

console.log(account.getBalance()); // 10000