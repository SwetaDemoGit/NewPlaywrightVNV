class Wallet {
    private balance: number = 0;

    addMoney(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    spendMoney(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

let wallet = new Wallet();

wallet.addMoney(5000);
wallet.spendMoney(1200);
wallet.spendMoney(5000);

console.log(`Balance: ${wallet.getBalance()}`);
