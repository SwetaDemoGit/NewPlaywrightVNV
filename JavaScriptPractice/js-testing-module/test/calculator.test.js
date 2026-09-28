const assert = require("assert");
const calculator = require("../calculator");

describe("Calculator", function () {

    it("should add two numbers", function () {
        // Arrange
        const a = 10;
        const b = 20;

        // Act
        const result = calculator.add(a, b);

        // Assert
        assert.strictEqual(result, 30);
    });

    it("should subtract two numbers", function () {
        const result = calculator.subtract(20, 10);
        assert.strictEqual(result, 10);
    });

    it("should multiply two numbers", function () {
        const result = calculator.multiply(5, 4);
        assert.strictEqual(result, 20);
    });

    it("should divide two numbers", function () {
        const result = calculator.divide(20, 5);
        assert.strictEqual(result, 4);
    });

    it("should throw error for division by zero", function () {
        assert.throws(
            () => calculator.divide(10, 0),
            /Cannot divide by zero/
        );
    });
});
