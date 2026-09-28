function getUser(callback) {
    setTimeout(() => {
        callback({
            id: 101,
            name: "John"
        });
    }, 500);
}

function getUserAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: 101,
                name: "John"
            });
        }, 500);
    });
}

function login() {
    return Promise.reject(new Error("Invalid credentials"));
}

module.exports = {
    getUser,
    getUserAsync,
    login
};
