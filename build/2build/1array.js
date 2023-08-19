
/*This are array's. We can have eleent of same datatype or differnet datatype in this array's. */ 
// There are many way to create array's in javaScript but here are few.
// Want to read about array's in deep then follow this link:- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// *****************First Array method*****************
const myarr = [1, 2, 3, 4, 5]
console.log("Accessing the element--> ",myarr[1]);

// *****************Second Array method*****************

const myarr2 = new Array(1 , 2 , 3 , 4 , 5 )
console.log("printing the element from array --> ",myarr2);

// *****************third Array method*****************

const myElements = [1 , 2 , 3 ,"Adithya" , true]
console.log("Printing the elements of diff DataTypes--> ",myElements);

// *****************Array methods*****************//

const myarr3 = [1 , 2 , 3 , 4, 5 ]
/*This will add the elements in the array. and will be having the parameter to add elements */
myarr3.push(6)
myarr3.push(7)

/*This will remove the last element from the array. */
myarr3.pop()
console.log("Done the operations like push and pop on the array--> ",myarr3);

// This will add elements in the array but the differnece isn unshift will add element at first of array.
myarr3.unshift(0)
// This will remove the first element from array.
myarr3.shift()
myarr3.shift()
console.log("Done the operations like unshift and shift on the array--> ",myarr3);

const myarr4 = myarr3.join() // This will convert the array to string.
console.log("printing the array after using JOIN method--> ",myarr3);
console.log("printing the array after using JOIN method--> ",myarr4);

const newarray = new Array(1 , 2 , 3 , 4,5 ,6)

console.log("A -->",newarray);

console.log(newarray.slice(1 , 2));
console.log("B -->",newarray);

console.log(newarray.splice(1 , 2));
console.log("C -->",newarray);

// The main diff bet slice and splice is that slice will not include the (1 , 2) 2 element and nothing will be changed in array.
// But splice will be includeing the (1 , 2) 2 and the changes will be happen to array .
// There are more methods in array's if possible they study the methods from MDN documentatin.