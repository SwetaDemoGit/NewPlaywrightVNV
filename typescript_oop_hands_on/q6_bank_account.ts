class BankAccount {
    private balance: number = 0;

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

let account = new BankAccount();

account.deposit(10000);
account.withdraw(2500);
account.withdraw(9000);

console.log(`Balance: ${account.getBalance()}`);
