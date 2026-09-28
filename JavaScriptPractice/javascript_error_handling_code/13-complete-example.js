function withdraw(balance, amount) {
    if (amount <= 0) {
        throw new Error("Amount must be greater than zero");
    }

    if (amount > balance) {
        throw new Error("Insufficient balance");
    }

    return balance - amount;
}

try {
    const remainingBalance = withdraw(5000, 6000);
    console.log("Remaining balance:", remainingBalance);
} catch (error) {
    console.log("Transaction failed:", error.message);
} finally {
    console.log("Transaction process completed");
}
