class Payment {
    processPayment(): void {
        console.log("Processing payment");
    }
}

class CreditCardPayment extends Payment {
    processPayment(): void {
        console.log("Credit card payment processed");
    }
}

class UPIPayment extends Payment {
    processPayment(): void {
        console.log("UPI payment processed");
    }
}

let creditCard = new CreditCardPayment();
let upi = new UPIPayment();

creditCard.processPayment();
upi.processPayment();
