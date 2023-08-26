// immedicate invoked function expression.

(function () 
{
    console.log("Hello This World.");
})();

//---------- method 1 ------------
(function chai() // this is function keyword in parathises and function name. 
{
    // chai () is called named IIFE
    // function answer or can write any thing 
    
})(); //() this is function call to print.


//---------- method 2 --------------

( () => {
    // () this is unnamed IIFE 
// write anything here.
}
)();