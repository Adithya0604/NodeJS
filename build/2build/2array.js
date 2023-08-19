const tollywood = ["NTR" , "RamCharan" , "MaheshBabu"]
const Bollywood = ["Salam Khan" , "Sharuk Khan" , "Amair Khan"]

// Push operation

tollywood.push(Bollywood)
console.log("This is push operator -->",tollywood);

//  Concat Operation

const Allheros = tollywood.concat(Bollywood)
console.log("This is concat opertor -->",Allheros);

// Speard operation 

const AllNewHeros = [...tollywood , ...Bollywood]
console.log("This is Speard method which will speard all the elements of the array in the new array-->",AllNewHeros);

// Flat operation

const Myarr = [1 , 2,[3 , 4,[5 , 6]] , 7 , 8 , [9 ,10 , [11 , 12 , [13 , 14]]]]
console.log(Myarr.flat(2));
console.log(Myarr.flat(Infinity));

/*In this code, the flat(Infinity) method is applied to the Myarr array. 
By using Infinity as the argument, you're asking the flat() method to flatten all levels of nesting.
This means that all nested arrays, regardless of their depth, will be completely flattened into a single-level array.

In summary, the key difference is the level of flattening:

Myarr.flat(3) flattens up to three levels deep.
Myarr.flat(Infinity) flattens all levels of nesting. */