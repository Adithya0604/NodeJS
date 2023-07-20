const { log } = require("console");

// this is imp point to talk :- what will be the result if we add string and numb4r in js will it give output has error or result .
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + '2');
console.log(1 + 2);
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
// what will be the output?

output :- 
12
12
12
3
122
32
// this is because in js we do not get any error insteat js will perform some type correction which will conveert the string to number or vicevsera.
// if we want the result of first expression has 3 we will use inbuilt function in js parsaInt which will convert the string to number and give the result has 3 not 12.
// read this statement 

// This behavior is a feature of JavaScript and can sometimes lead to unexpected results, especially if you're not aware of how type coercion works. To avoid unexpected behavior and potential bugs, it's a good practice to use explicit type conversion (e.g., parseInt() or parseFloat() functions) when you want to perform arithmetic operations on strings that represent numbers.

// ----------------------
//In JavaScript, when using comparison operators, null and undefined are treated as special cases. They have the following behaviors:

// When comparing null with a numeric value, null is converted to 0.
// When comparing undefined with a numeric value, undefined is converted to NaN (Not-a-Number).


// --------------------
// To perform strict equality checks, which do not involve type coercion, you should use the strict equality operator (===) and strict inequality operator (!==). These operators check both value and type. For example:

console.log(null === 0);  // Output: false (strict equality)
console.log(null !== 0);  // Output: true  (strict inequality)
console.log("2" == 2); //true only checks vlaue. so type correction will be there.
console.log("2" === 2); // false this will check strily checks datatype and value
// Using strict equality ensures that you're comparing both the value and the data type, making your comparisons more accurate and predictable.