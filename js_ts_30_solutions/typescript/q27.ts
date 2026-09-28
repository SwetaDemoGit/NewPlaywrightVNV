// Q27. Bank Transaction
class BankAccount {
  private balance: number;

  constructor(initialBalance: number = 0) {
    if (initialBalance < 0) {
      throw new Error("Initial balance cannot be negative");
    }

    this.balance = initialBalance;
  }

  credit(amount: number): void {
    if (amount <= 0) {
      console.log("Credit amount must be greater than 0");
      return;
    }

    this.balance += amount;
  }

  debit(amount: number): void {
    if (amount <= 0) {
      console.log("Debit amount must be greater than 0");
      return;
    }

    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }

    this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const account = new BankAccount(1000);
account.credit(500);
account.debit(300);
account.debit(2000);

console.log("Balance:", account.getBalance());
