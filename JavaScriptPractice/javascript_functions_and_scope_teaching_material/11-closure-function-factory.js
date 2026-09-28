// Closure - Function Factory
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
//t creates and returns the inner function.
//That returned function is stored in double.
//double is now a function.
//That function remembers multiplier = 2.



console.log("Double:", double(5));
console.log("Triple:", triple(5));

//double contains the function created by createMultiplier(2).
//We call it with 5.
//number = 5 and remembered multiplier = 2.
//5 * 2 = 10.
//Output: Double: 10

//"We didn't create a function called double. 
// createMultiplier(2) created a function and 
// returned it. We simply stored that returned 
// function inside a variable called double."
//Since double stores a fn you can call it as well

// createMultiplier(2)
//        |
//        | multiplier = 2
//        |
//        ↓
//    returned function
//        |
//        ↓
//      double
//        |
//        └── remembers multiplier = 2