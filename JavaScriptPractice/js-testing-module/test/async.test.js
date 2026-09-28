const assert = require("assert");
const { getUser, getUserAsync, login } = require("../user");

describe("Asynchronous Testing", function () {

    it("should get user using done()", function (done) {
        getUser(function (user) {
            assert.strictEqual(user.name, "John");
            done();
        });
    });

    it("should get user using a returned Promise", function () {
        return getUserAsync().then(function (user) {
            assert.strictEqual(user.name, "John");
        });
    });

    it("should get user using async/await", async function () {
        const user = await getUserAsync();
        assert.strictEqual(user.name, "John");
    });

    it("should reject invalid login", async function () {
        try {
            await login();
            assert.fail("Expected login to fail");
        } catch (error) {
            assert.strictEqual(error.message, "Invalid credentials");
        }
    });
});
