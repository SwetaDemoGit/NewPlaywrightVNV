Hands-on Exercise: Callback Function

Task: Display a Product

Create a function getProduct() that accepts a callback function.

Requirements:
Create a function getProduct(callback).
Inside the function, create a product object:
{
    name: "Laptop",
    price: 50000
}
Pass this product object to the callback.
Create a function displayProduct(product) that prints:
Product name
Product price
Call getProduct(displayProduct).
Expected Output
Product: Laptop
Price: 50000