const assert = require("assert");

describe("Common Assertions", function () {

    it("should use strictEqual", function () {
        assert.strictEqual(10 + 20, 30);
    });

    it("should use notStrictEqual", function () {
        assert.notStrictEqual(10, 20);
    });

    it("should compare objects using deepStrictEqual", function () {
        const actual = { name: "John", age: 25 };
        const expected = { name: "John", age: 25 };

        assert.deepStrictEqual(actual, expected);
    });

    it("should check a truthy value using ok", function () {
        const user = { name: "John" };
        assert.ok(user);
    });
});
