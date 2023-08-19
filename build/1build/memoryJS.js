let  myYoutubeName = "AdithyaSharma";

let anotherYoutubeName = myYoutubeName;

console.log("This is the name of anotherYoutubeName: " , anotherYoutubeName);
console.log("This is the name of myYoutubeName: " ,myYoutubeName);

anotherYoutubeName = "ThirdName";

console.log("This is the name of anotherYoutubeName: " , anotherYoutubeName);
console.log("This is the name of myYoutubeName: " ,myYoutubeName);

// This is the name of anotherYoutubeName:  AdithyaSharma
// This is the name of myYoutubeName:  AdithyaSharma
// This is the name of anotherYoutubeName:  ThirdName
// This is the name of myYoutubeName:  AdithyaSharma

// what happens with this primitive datatypes is this DT will be going to stack memory. if any value is changing 
// in this then the copy of the DT will be changed not the orginal value it will remain unchanged.


let  userOne =
{
    name : "Adithya Sharma",
    age : 18
}

let  userTwo = userOne

console.log(userTwo , userOne);

userTwo.name = "Sandhyabhiksham Adithya Sharma"

console.log(userTwo , userOne);

// output :- { name: 'Adithya Sharma', age: 18 } { name: 'Adithya Sharma', age: 18 }
// { name: 'Sandhyabhiksham Adithya Sharma', age: 18 } { name: 'Sandhyabhiksham Adithya Sharma', age: 18 }

// non primitive datatype will be stroing the values in heap memory. so , is any vaible will be refering the same value 
// if the other will change the value then the value in first varible will be changing.

// memory.png is the image used for this js file.