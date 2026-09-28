const assert = require("assert");
const login = require("../login");

describe("Login", function () {

    it("should return true for valid credentials", function () {
        assert.strictEqual(login("admin", "1234"), true);
    });

    it("should return false for invalid password", function () {
        assert.strictEqual(login("admin", "wrong"), false);
    });

    it("should return false for invalid username", function () {
        assert.strictEqual(login("john", "1234"), false);
    });

    it("should return false when username is empty", function () {
        assert.strictEqual(login("", "1234"), false);
    });

    it("should return false when password is empty", function () {
        assert.strictEqual(login("admin", ""), false);
    });
});
