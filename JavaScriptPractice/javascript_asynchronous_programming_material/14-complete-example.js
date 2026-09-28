function loadUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 101, name: "Rahul" });
        }, 1000);
    });
}

function loadOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, amount: 500 },
                { id: 2, amount: 750 }
            ]);
        }, 1000);
    });
}

async function displayUserOrders() {
    try {
        console.log("Loading user...");

        const user = await loadUser();
        console.log("User:", user);

        console.log("Loading orders...");

        const orders = await loadOrders(user.id);
        console.log("Orders:", orders);

        console.log("Completed");
    } catch (error) {
        console.log("Error:", error);
    }
}

displayUserOrders();
