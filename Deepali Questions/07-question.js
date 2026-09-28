let filename = "123report.txt";

// Rule 1: Check file extension
if (!/\.(txt|csv)$/.test(filename)) {
    console.log("Invalid file extension");
} // \. is actual dot, (txt|csv) is a group that matches either "txt" or "csv", and $ asserts the end of the string

// Remove extension to check only the filename
else {
    let name = filename.substring(0, filename.lastIndexOf("."));

    // Rule 2: Check allowed characters
    if (!/^[A-Za-z0-9_-]+$/.test(name)) {
        console.log("Invalid characters in filename");
    }

    // Rule 3: Check filename length
    else if (name.length > 20) {
        console.log("Filename too long");
    }

    // Rule 4: Check first character
    else if (/^[0-9]/.test(name)) {
        console.log("Filename must not start with a digit");
    }

    // All rules passed
    else {
        console.log("Valid filename");
    }
}