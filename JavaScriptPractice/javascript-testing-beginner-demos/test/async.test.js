// Import Node.js built-in assert module.
// We use assert to check whether the actual result
// matches the expected result.
const assert = require("assert");


// Import the functions that we want to test
// from the asyncData.js file.
const {
    getData,
    getUser
} = require("../src/asyncData");


// describe() groups related test cases together.
// Here, both tests are related to asynchronous code.
describe("Asynchronous Code", function () {


    // Test case 1:
    // We are testing getData(), which uses a callback.
    //
    // done is provided by Mocha.
    // We call done() when the asynchronous operation is completed.
    it("should receive data using callback", function (done) {


        // Call getData() and provide a callback function.
        // The callback will receive the result after
        // the asynchronous operation is completed.
        //Mocha has to provide the done function to your test. That's why you receive it as a parameter:    
        getData((result) => {


            // Check whether the result received from getData()
            // is exactly "Data received".
            assert.strictEqual(
                result,
                "Data received"
            );


            // Tell Mocha that the asynchronous test is complete.
            // Without done(), Mocha may finish the test before
            // the callback is executed.
            done();
        });

    });


    // Test case 2:
    // We are testing getUser(), which returns a Promise.
    //
    // Because getUser() is asynchronous, we use async/await.
    it("should return user using Promise", async function () {


        // Wait for the Promise returned by getUser() to complete.
        // The returned user object is stored in the user variable.
        const user = await getUser();


        // Check whether the user's name is "Rahul".
        assert.strictEqual(
            user.name,
            "Rahul"
        );


        // Check whether the user's age is 20.
        assert.strictEqual(
            user.age,
            20
        );

    });

});