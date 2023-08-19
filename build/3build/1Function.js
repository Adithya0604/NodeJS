function person() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("H");
    console.log("Y");
    console.log("A");
}
// function keyword function name function parameters and function
// person() // this is function call 
// person // This is refercnce  of function





function AddTwoNumbers(a , b) 
{
    let result = a + b
    return result
    // return a + b
    console.log(a + b);
                                            //Unreachable code detected
                                            // Variable declaration not allowed at this location.ts(1440)
                                            // any
                                            //   here after return statement  console statement will not work it will work only before return statement. 
}
const result = AddTwoNumbers(10 , 8)
console.log(result); // this is not having mesning data to assign to this varible 
// we have retunred the value by calling the function but we have not given comand for priting the result this is the key for priting.
AddTwoNumbers(10 , 9)
AddTwoNumbers(10 , "9")
AddTwoNumbers(10 , null)
AddTwoNumbers(10 , undefined)






function Employee(Username = "Sandhyabhiksham Adithya Sharma") // default parameter.
{
    return `${Username} is the best employee.`   
}
Employee("Adithya Sharma") // we are calling the function with argument but not printing the function result.

// Here also haveing same problem. we ahev called the function but not printed the result of the function.

console.log(Employee("Adithya Sharma"));



function AddCartPrice(...num1)
{
    return num1
}
console.log(AddCartPrice(200 ));
console.log(AddCartPrice(200 , 300 , 400));



function AddCartPrice(val1 , val2, ...num1)
{
    return num1
}
console.log(AddCartPrice(200 , 300 , 400 , 500 , 600));





const person = {
    Name : "Adithya Sharma",
    age : 19,
    collage: "Chandigarh University"
}

function HandleObject(anyObject)
{
    console.log(`1) Name of the Employee in Object named Person is ${anyObject.Name} , ${anyObject.age} years and collage is  ${anyObject.collage}`);
}
HandleObject(person)
// It is not neccessary to create the object and pass has parameter we can directly pass the object as parameter.

function HandleObject1(anyObject1)
{
    console.log(`2) Name of the Employee in Object named Person is ${anyObject1.Name} , ${anyObject1.age} years and collage is  ${anyObject1.collage}`);
}
HandleObject1({
    Name : "S.Adithya Sharma",
    age : 19,
    collage: "Chandigarh University"
}
)
// function should not be same paramater should not be same for two or more funcion when created

