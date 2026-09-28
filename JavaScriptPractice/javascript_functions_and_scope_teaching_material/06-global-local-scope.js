// Global and Local Scope
const company = "TechCorp";

function displayCompany() {
    console.log("Company:", company);
    const department = "IT";
    console.log("Department:", department);
}
displayCompany();

// department is local to displayCompany()
// console.log(department); // ReferenceError
