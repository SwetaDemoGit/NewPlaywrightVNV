Promise.reject("Request failed")
    .catch((error) => console.log("Promise error:", error));

async function getData() {
    try {
        const result = await Promise.reject("Request failed");
        console.log(result);
    } catch (error) {
        console.log("Async error:", error);
    }
}

getData();
