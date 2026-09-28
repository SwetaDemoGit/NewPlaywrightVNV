// Q22. Payment System
abstract class Payment {
  abstract pay(amount: number): void;
}

class CreditCard extends Payment {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using Credit Card`);
  }
}

class UPI extends Payment {
  pay(amount: number): void {
    console.log(`Paid ₹${amount} using UPI`);
  }
}

const payments: Payment[] = [new CreditCard(), new UPI()];

for (const payment of payments) {
  payment.pay(1500);
}
