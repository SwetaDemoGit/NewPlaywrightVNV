function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Rahul");
        }, 500);

    });
}


function getOrders(user) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(["Order 101", "Order 102"]);
        }, 500);

    });
}


function getPayment(orders) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Payment successful");
        }, 500);

    });
}


// Calling the functions

// Call getUser() to get the user information
getUser()

    // Wait for getUser() to complete and receive the result in the user parameter
    .then((user) => {

        // Print the user information
        console.log("User:", user);

        // Call getOrders() using the user and return the Promise to the next .then()
        return getOrders(user); //The return passes the Promise to the next .then().

        // Close the first .then() function
    })

    // Wait for getOrders() to complete and receive the result in the orders parameter
    .then((orders) => {

        // Print the orders information
        console.log("Orders:", orders);

        // Call getPayment() using the orders and return the Promise to the next .then()
        return getPayment(orders);

        // Close the second .then() function
    })

    // Wait for getPayment() to complete and receive the result in the payment parameter
    .then((payment) => {

        // Print the final payment result
        console.log(payment);

        // Close the final .then() function
    });


//async await
// async function processOrder() {

//     const user = await getUser();
//     //Wait for getUser() to complete, then store its result 
//     // in user.

//     console.log("User:", user);

//     const orders = await getOrders(user);

//     console.log("Orders:", orders);

//     const payment = await getPayment(orders);

//     console.log(payment);
// }

// processOrder();

//async → makes a function asynchronous
//await → waits for a Promise result