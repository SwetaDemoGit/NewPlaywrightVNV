const assert = require("assert");

const { greet } = require("../src/greeting");

describe("Greeting", function () {

    it("should return greeting message", function () {
        assert.strictEqual(
            greet("Rahul"),
            "Hello Rahul"
        );
    });

});
