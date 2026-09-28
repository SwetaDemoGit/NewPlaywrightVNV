// Private Property
// # makes a property private in JavaScript.

class BankAccount {
    #balance = 5000;

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

console.log(account.getBalance());

// This is NOT allowed:
// console.log(account.#balance);
