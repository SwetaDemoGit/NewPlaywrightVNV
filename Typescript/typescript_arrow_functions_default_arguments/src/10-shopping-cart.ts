// Real-world example: Shopping Cart

const calculateCartTotal = (
    price: number,
    quantity: number = 1
): number => {
    return price * quantity;
};

console.log(calculateCartTotal(500));
console.log(calculateCartTotal(500, 2));
