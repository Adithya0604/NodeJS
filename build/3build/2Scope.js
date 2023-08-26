//-------------------------------------------------------
console.log("-------------------------------------------------------");
// Global Scope.


let Scope = "AdithyaSharma"

function MyScope()
{
    console.log("inner Scope:- ",Scope);   
}
MyScope()
console.log("Outer Scope:- ",Scope); 

//-------------------------------------------------------
console.log("-------------------------------------------------------");
// Local Scope


let Scope1 = "AdithyaSharma"

function MyScope1()
{
    let Scope1= "S.Adithya Sharma"
    console.log("inner Scope:- ",Scope1);   
}
MyScope1()
console.log("Outer Scope:- ",Scope1);   

//-------------------------------------------------------
console.log("-------------------------------------------------------");
// nested function scope

let Name = "Sandhyabhiksham Adithya Shamrma"

function MyNameOuter() 
{
    let Name1 = "Adithya"
    function MynameInner() 
    {
        let Name2 = "Sharma"
        console.log("A ",Name2);
        console.log("B ",Name1);
        console.log("C ", Name);
    }   
    console.log("D ",Name1);
    // console.log("E ",Name2); // This will give an error
    console.log("F ",Name);
    MynameInner()
}
// console.log("G ",Name1);// this will give an error because the value is inside the function is local not global
// console.log("H ",Name2);// this will give an error because the value is inside the function is local not global
console.log("I ",Name);
MyNameOuter()

// Here the outside Scope can be accessable anywhere in the code but the inner Scope can't be accessable outside the code .
//-------------------------------------------------------
console.log("-------------------------------------------------------");

// This is the best example of this nested fuction it goes like this :- children can take i cecream from older memebers but older members
// can't take the icecream from children. Same thig applies for this nested function.


//-------------------------------------------------------

console.log(addone(5)); // we can access the the function before declaration also but not in all cases.
function addone(num) 
{
    return num + 1    
}
console.log(addone(5));


//-------------------------------------------------------

console.log(One1(4)); // we can access the the function before declaration also but not in all cases.
// ReferenceError: Cannot access 'One1' before initialization
const One1 = function addone1(num) 
{
    return num + 1    
}
console.log(One1(4));
