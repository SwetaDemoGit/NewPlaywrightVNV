// Question 21: Best Time to Buy and Sell Stock
// Buy once and sell once for maximum profit.
// Return 0 if no profit is possible.
//
// Example:
// [7, 1, 5, 3, 6, 4] -> 5

function max_profit(prices) {
    // Lowest price seen so far.
    let minPrice = prices[0];

    // Best profit found so far.
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        // Calculate profit if we sell today.
        let profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

module.exports = { max_profit };
