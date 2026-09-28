try {
    console.log("Starting operation");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Operation completed");
}

try {
    console.log(userName);
} catch (error) {
    console.log("Error handled");
} finally {
    console.log("Cleanup completed");
}
