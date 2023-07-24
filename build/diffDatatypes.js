// there are two diff type of datatypes 
// primitive and non primitive 

const { table } = require("console")
const { types } = require("util")

// primitive (by value)
// primitive datatypes are called by value. Once the values are assigned tothe varibles then this are immutable (not changeable)
// if you want to change the values then copy of the value will be there and changed will be done to it not to the orginal value.
// Ex: string , number , boolean , null , uundefined , symbol etc. 

// non primitive ( by reference)
// non - primitive dataypes are called by reference . You can change the value which assigned to the varibles.
// they can store more then one value for each varible.
// Ex:- array , functions , objects etc.

const ID = 10598
let Name = "Adithya Sharma"
let lastName = false
let age = null
let gender
let address = Symbol("Nyalakal Road , Nizamabad.")

console.table([ID , Name , lastName, age, gender , address])

const Person = {
    name : "Adithya Sharma",
    age : 18,
    gender : "Male",
    study : "Chandigarh University"
}

function Adithya() {
    console.log("This is function named 'Adithya'. ");
}

const array = ["Adithya Sharma" , 18 , 10598 , "Nyalakal Raod Nizamabad" , "Male" ];

console.table([Person , array]);

console.log(typeof(Person) , typeof(Adithya) , typeof(array));
// tyhe types of on primitive datatypesare objects ;ike function datatype is object funtion , arary is object like that .