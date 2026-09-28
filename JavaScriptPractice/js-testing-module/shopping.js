function calculateTotal(price, quantity) {
    return price * quantity;
}

function calculateDiscount(price, percentage) {
    return price - (price * percentage / 100);
}

module.exports = {
    calculateTotal,
    calculateDiscount
};
