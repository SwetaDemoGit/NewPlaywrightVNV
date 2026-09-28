const assert = require("assert");
const { calculateTotal, calculateDiscount } = require("../shopping");

describe("Shopping Functions", function () {

    it("should calculate total price", function () {
        const result = calculateTotal(100, 2);
        assert.strictEqual(result, 200);
    });

    it("should return zero when quantity is zero", function () {
        const result = calculateTotal(100, 0);
        assert.strictEqual(result, 0);
    });

    it("should calculate discount", function () {
        const result = calculateDiscount(1000, 10);
        assert.strictEqual(result, 900);
    });
});
