// Private Method
// A method starting with # is private.

class User {
    login() {
        this.#checkPassword();
        console.log("User logged in.");
    }

    #checkPassword() {
        console.log("Checking password...");
    }
}

const user = new User();

user.login();

// This is NOT allowed:
// user.#checkPassword();
