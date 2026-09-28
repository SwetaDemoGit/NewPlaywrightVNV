class ShoppingCart {
    private total: number = 0;

    addItem(price: number): void {
        if (price > 0) {
            this.total += price;
        }
    }

    removeItem(price: number): void {
        if (price > 0 && price <= this.total) {
            this.total -= price;
        }
    }

    getTotal(): number {
        return this.total;
    }
}

let cart = new ShoppingCart();

cart.addItem(1000);
cart.addItem(500);
cart.removeItem(300);

console.log(`Total: ${cart.getTotal()}`);
