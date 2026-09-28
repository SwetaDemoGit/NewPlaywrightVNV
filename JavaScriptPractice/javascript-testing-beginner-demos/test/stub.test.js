const assert = require("assert");

const {
    calculateTotal
} = require("../src/priceService");

describe("Stub Example", function () {

    it("should calculate total using a fixed price", function () {

        // Stub: getPrice() always returns 100
        //Stub = "Give my code this particular data."
        const priceService = {

            getPrice: function () {
                return 100;
            }

        };

        const result =
            calculateTotal(priceService);//give that stub to your real application function:

        assert.strictEqual(
            result,
            110
        );

    });

});


// Real price service  → might call database/API
//                          ↓
//                     difficult to test

// Stub price service  → always returns 100
//                          ↓
//                     easy to test
