const assert = require("assert");

const { isAdult } = require("../src/age");

describe("Age", function () {

    it("should return true when age is 18 or above", function () {
        assert.strictEqual(isAdult(20), true);
    });

    it("should return false when age is below 18", function () {
        assert.strictEqual(isAdult(15), false);
    });

});
