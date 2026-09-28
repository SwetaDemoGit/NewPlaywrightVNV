try {
    console.log(username);
} catch (error) {
    console.log("Error Name:", error.name);// gives the type of error
    console.log("Error Message:", error.message);// gives the message of error
}
