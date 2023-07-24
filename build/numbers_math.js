const age = 19
console.log(age);

const Age = new Number(19)
console.log(Age);

// The diff bet this two are nothing but this new keyword will be using for any particular datatype like numbers and string

// constructor :  ƒ Number()
// toExponential :  ƒ toExponential()
// toFixed :  ƒ toFixed()
// toLocaleString :  ƒ toLocaleString()
// toPrecision :  ƒ toPrecision()
// toString :  ƒ toString()
// valueOf :  ƒ valueOf()

// this "f" in this is function.

console.log(Age.toFixed(2));
console.log(Age.toExponential(2));
console.log(Age.toLocaleString(2));
console.log(Age.toPrecision(2));
console.log(Age.toString(2)); // this will convert the number value into binary code 
console.log(Age.valueOf(2));

// result of this console
// 19
// [Number: 19]
// 19.00
// 1.90e+1
// 19
// 19
// 10011
// 19

console.log("----------------- Math -------------------")

// ----------------- Math -------------------

console.log(Math);

// This Math is very mp so please read about this i am not able to write this .