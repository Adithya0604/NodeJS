let score = -1
let score1 = "33"
let score2 = "33abc"
let score3 = "adithya"
let score4 = true
let score5 = null


let valueInNumber = Number(score)
let valueInNumber1 = Number(score1)
let valueInNumber2 = Number(score2)
let valueInNumber3 = Number(score3)
let valueInNumber4 = Number(score4)
let valueInNumber5 = Number(score5)
let valueInBoolean6 = Boolean(score)

// not only this we can convert to number we can convert any thing like boolean etc.

console.log([typeof(score) ,  typeof(score1) , typeof(score2) ,typeof(score3) , typeof(score4) , typeof(score5) ])
console.log([typeof(valueInNumber) ,  typeof(valueInNumber1) , typeof(valueInNumber2) ,typeof(valueInNumber3) , typeof(valueInNumber4)  ,typeof(valueInNumber5),typeof(valueInBoolean6) ])
console.log([valueInNumber ,  valueInNumber1 , valueInNumber2 ,valueInNumber3  ,valueInNumber4 ,valueInNumber5 , valueInBoolean6])


// If we want to do some changes in any variable in backend we don't know what is the value of. It can be of string , numberetc
// so, we have converted the value to numbers and saw the type of the number and actual value of the number . so this is the output .

// [ 'number', 'string', 'string', 'string', 'boolean', 'object' ]
// [ 'number', 'number', 'number', 'number', 'number', 'number' ]
// [ 33, 33, NaN, NaN, 1, 0 ]

// NaN is called not a number. It is used to indicate that an arithmetic operation or function resulted in a value that is not a valid number.
//if an value is not a valid number then it is represented by NaN in js.
//true is the value shown has 1 and false has 0 and shown has number.
//null is the value shown has 0 and shown has object .
// if the number is any integer even it is positive or negitive or 1 then it will show has true but if the value is 0 it then we will show it has false.
// u can give any value to see what is the result. 
// operations should be read from ECMAscript or  mdn 