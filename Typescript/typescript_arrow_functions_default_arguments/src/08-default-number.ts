// Default argument with a number
const calculateTotal = (price: number, quantity: number = 1): number => {
    return price * quantity;
};

console.log(calculateTotal(100));
console.log(calculateTotal(100, 3));
