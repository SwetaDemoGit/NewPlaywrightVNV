function calculateTotal(priceService) {
    const price = priceService.getPrice();

    return price + 10;
}

module.exports = {
    calculateTotal
};

//Here:

// priceService → object
// getPrice() → function inside that object
// getPrice() returns 100
// calculateTotal() adds 10
// Result → 110

