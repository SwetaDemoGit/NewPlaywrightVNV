// Interface + Polymorphism

interface Payment {
  pay(amount: number): void;
}

class UPI implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using UPI`);
  }
}

class CreditCard implements Payment {
  pay(amount: number): void {
    console.log(`Paid ${amount} using Credit Card`);
  }
}

const payments: Payment[] = [
  new UPI(),
  new CreditCard()
];

for (const payment of payments) {
  payment.pay(1000);
}
