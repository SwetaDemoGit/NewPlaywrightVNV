function getUser() {
    return Promise.resolve("Rahul");
}

function getOrders(user) {
    return Promise.resolve(["Order 101", "Order 102"]);
}

async function process() {
    const user = await getUser();
    console.log("User:", user);

    const orders = await getOrders(user);
    console.log("Orders:", orders);
}

process();


//comments added to explain the code
//getUser() returns a Promise containing "Rahul", and await waits for the result and stores it in user.
//Then getOrders(user) is called, which returns another Promise containing the orders.
//await gets the orders, which are stored in orders and then printed.
//The code looks synchronous and runs step-by-step, but the operations are still Promise-based and asynchronous.
