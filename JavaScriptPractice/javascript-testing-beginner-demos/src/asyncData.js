function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 100);
}

function getUser() {
    return Promise.resolve({
        name: "Rahul",
        age: 20
    });
}

module.exports = {
    getData,
    getUser
};
