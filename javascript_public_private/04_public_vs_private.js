// Public vs Private

class Product {
    // Public property
    name = "Laptop";

    // Private property
    #price = 50000;

    showProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ₹${this.#price}`);
    }
}

const product = new Product();

product.showProduct();

// Public property can be accessed directly.
console.log(product.name);

// Private property cannot be accessed directly.
// console.log(product.#price);
