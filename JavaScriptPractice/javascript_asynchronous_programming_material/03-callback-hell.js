function getUser(callback) {
    setTimeout(() => callback("Rahul"), 500);
}

// getUser() gets the user after 500 ms.
// Once the user is available, it calls the callback.
// "Rahul" is passed to the callback.

function getOrders(user, callback) {
    setTimeout(() => callback(["Order 101", "Order 102"]), 500);
}

// After getting the user, we get that user's orders.
// After 500 ms, it sends the orders to the callback.

function getPayment(orders, callback) {
    setTimeout(() => callback("Payment successful"), 500);
}

//After getting the orders, we get the payment status.
//After 500 ms, it calls the callback with 
// "Payment successful".

getUser((user) => {
    console.log("User:", user);

    getOrders(user, (orders) => {
        console.log("Orders:", orders);

        getPayment(orders, (payment) => {
            console.log(payment);
        });
    });
});

// getUser()
//     .then(user => getOrders(user))
//     .then(orders => getPayment(orders))
//     .then(payment => console.log(payment));