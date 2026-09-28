// Q19. Date Validator
const date = "25-12-2026";

// Regex validates the DD-MM-YYYY structure and basic day/month ranges.
// It does not check month-specific day counts such as 31-02-2026.
const isValid = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/.test(date);

console.log(isValid ? "Valid" : "Invalid");
