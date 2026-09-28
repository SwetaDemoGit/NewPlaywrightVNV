// Real-world example: Product

// Create a product object
let product = {
    name: "Laptop",
    price: 50000,
    quantity: 2
};

// Destructure the product object
// Get name, price, and quantity directly from the object
let { name, price, quantity } = product;

// Calculate the total price
// Total = price × quantity
let total: number = price * quantity;

// Display the product name
console.log(`Product: ${name}`);

// Display the total price
console.log(`Total: ${total}`);