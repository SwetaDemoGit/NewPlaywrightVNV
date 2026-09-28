const assert = require("assert");

const {
    add,
    subtract,
    multiply,
    divide
} = require("../src/calculator");
// Import the functions that we want to test

describe("Calculator", function () {

    it("should add two numbers", function () {
        assert.strictEqual(add(10, 20), 30);
    });

    it("should subtract two numbers", function () {
        assert.strictEqual(subtract(20, 10), 10);
    });

    it("should multiply two numbers", function () {
        assert.strictEqual(multiply(5, 4), 20);
    });

    it("should divide two numbers", function () {
        assert.strictEqual(divide(20, 5), 4);
    });

    it("should throw error when dividing by zero", function () {
        assert.throws(
            () => divide(10, 0),
            /Cannot divide by zero/
        );
    });

});
