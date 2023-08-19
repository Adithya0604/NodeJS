// *************Object************
// know more about objects then go to this link :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
const Sym = Symbol("key1");
// We have to declare the Symbols before using in objects.
const Person = {
    Name : "Adithya Sharma",
    age : 18,
    collage : "CU", // This is the common way to declare the vaible  of Objects
    "Branch" : "CSE", //If we delare the the varible in "" or '' then we can only access the value of this varible is from Object_name[""] or object_name[''].
    [Sym] : "Mykey1", // If we want to accesz the value of Symbol then we will be declreing Symbol first and then we aill be accessing it like object_name[]
};

console.log("This is the Object where we are accessing the key values from Person--> ",Person.Name );
console.log("This is the Object where we are accessing the key values from Person--> ",Person[Sym]);
console.log("This is the Object where we are accessing the key values from Person--> ",Person["Branch"] );

/* If we eant to freeze the value of this Object means any changes will not be done to the Object. */

// We can freeze the induvical properties from the objects.
Object.freeze(Person.Name)
Name = "Sandhyabhiksham Adithya Sharma"

Person.age = 19
console.log(Person);


// ************* Function ************

function Person(name , age , collage , branch){
    this.Name = name;
    this.Age = age;
    this.Collage = collage;
    this.Branch = branch;
}
const PersonInfo = new Person("Adithya Sharma" , 19 , "CU" , "CSE");
console.log(PersonInfo.Branch);