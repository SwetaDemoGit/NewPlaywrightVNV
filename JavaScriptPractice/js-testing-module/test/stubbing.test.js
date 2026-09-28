const assert = require("assert");
const { getUsername, registerUser } = require("../user-service");

describe("Stubbing and Mocking Concepts", function () {

    it("should use a stubbed user service", function () {
        // Stub: controlled replacement for the real dependency
        const fakeUserService = {
            getUser: function () {
                return {
                    id: 101,
                    name: "John"
                };
            }
        };

        const result = getUsername(fakeUserService);

        assert.strictEqual(result, "John");
    });

    it("should verify an email service interaction", function () {
        let callCount = 0;
        let receivedEmail = null;

        // Simple mock/spying behavior without an external library
        const fakeUserService = {
            createUser: function () {
                return {
                    id: 101,
                    email: "john@test.com"
                };
            }
        };

        const fakeEmailService = {
            sendWelcomeEmail: function (email) {
                callCount++;
                receivedEmail = email;
            }
        };

        registerUser(fakeUserService, fakeEmailService);

        assert.strictEqual(callCount, 1);
        assert.strictEqual(receivedEmail, "john@test.com");
    });
});
