const Person = {
    Name : "Adithya Sharma",
    age : 18,
    collage : "CU", // This is the common way to declare the vaible  of Objects
    "Branch" : "CSE", //If we delare the the varible in "" or '' then we can only access the value of this varible is from Object_name[""] or object_name[''].
     // If we want to accesz the value of Symbol then we will be declreing Symbol first and then we aill be accessing it like object_name[]
};

Person.age = 19
console.log(Person);

Object.freeze(Person.Name)
Name = "Sandhyabhiksham Adithya Sharma"

Person.age = 20
console.log(Person);