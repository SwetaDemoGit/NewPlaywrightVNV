const assert = require("assert");

const { getUserName } = require("../src/userService");

describe("Mock Example", function () {

    it("should get username from fake user service", function () {

        // Fake service used instead of a real database
        const fakeUserService = {

            getUser: function () {
                return {
                    name: "Rahul"
                };
            }
            //This is stub-like behavior.

        };

        const result =
            getUserName(fakeUserService); //The returned value from the fake service is used in the real application function:

        assert.strictEqual(
            result,
            "Rahul"
        );

    });

});
