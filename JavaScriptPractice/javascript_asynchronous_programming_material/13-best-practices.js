async function fetchData() {
    try {
        const data = await Promise.resolve("Data");
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();

function getUser() {
    return Promise.resolve("Rahul");
}

function getProducts() {
    return Promise.resolve(["Laptop", "Phone"]);
}

async function load() {
    const [user, products] = await Promise.all([
        getUser(),
        getProducts()
    ]);

    console.log(user);
    console.log(products);
}

load();
