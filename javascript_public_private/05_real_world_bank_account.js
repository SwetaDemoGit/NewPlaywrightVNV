// Real-World Example: Bank Account

class BankAccount {
    #balance = 10000;

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(5000);
account.withdraw(2000);

console.log(`Balance: ₹${account.getBalance()}`);

// The balance is private.
// account.#balance = 100000; // Error
