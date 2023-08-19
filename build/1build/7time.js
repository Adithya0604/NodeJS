let mydate = new Date()

console.log(mydate.toString()); // Specific date and time in words
console.log(mydate.toDateString()); // only date in words
console.log(mydate.toISOString()); //date and time in numbers format 24
console.log(mydate.toJSON()); //date and time in numbers format 24
console.log(mydate.toLocaleDateString()); // date in number
console.log(mydate.toLocaleString()); // date and time in number format 12

let  createDate = new Date(2023 , 7 , 18 , 9 , 55) //if we want to create our own date and time then give some parameters to this Date.
// here yyyy/mm/dd and mm wil start from 0 to 11.
console.log(createDate.toLocaleString());
