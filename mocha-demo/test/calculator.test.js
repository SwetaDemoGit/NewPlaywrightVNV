const assert = require("assert");

const {
    add,
    subtract,
    multiply
} = require("../src/calculator");

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

});