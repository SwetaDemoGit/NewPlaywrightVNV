const assert = require("assert");

describe("Testing Objects and Arrays", function () {

    it("should compare an object", function () {

        const user = {
            name: "Rahul",
            age: 20
        };

        assert.deepStrictEqual(
            user,
            {
                name: "Rahul",
                age: 20
            }
        );

    });

    it("should compare an array", function () {

        const numbers = [10, 20, 30];

        assert.deepStrictEqual(
            numbers,
            [10, 20, 30]
        );

    });

});
