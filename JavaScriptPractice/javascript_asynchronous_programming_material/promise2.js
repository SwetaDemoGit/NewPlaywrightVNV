function getUser() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve("Rahul");
        }, 2000);

    });

}

getUser()
    .then((user) => {
        console.log("User:", user);
    });


// | Callback                      | Promise                       |
// | ----------------------------- | ----------------------------- |
// | Pass a function               | Return a Promise              |
// | `callback("Rahul")`           | `resolve("Rahul")`            |
// | Handle result inside callback | Handle result using `.then()` |
// | Can become deeply nested      | Can be chained                |
