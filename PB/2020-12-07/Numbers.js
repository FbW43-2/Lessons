/*

Number:
- Combining strings and numbers with +
- Integers vs. Floats
- Converting strings into Numbers: `parseInt()`, `parseFloat()`
- Using modulo  
Math:
- Rounding up with `Math.ceil()`
- Rounding down with `Math.floor()`
- Getting random numbers with `Math.random()`
- Maximum and minimum with `Math.max()`, `Math.min()`

*/

'use strict';

//console.log(" Hello " + 77)  + 
let FloatPrice=35.99; // Float
let IntegerPrice=35 // Integer 

let TotalPrice= FloatPrice+IntegerPrice;
//console.log(TotalPrice);

let UserName="Mo";
let Password="ABC123";
let AccountBalance = "$99999"
let TanCode;


/*

if(UserName=="Mo" && Password=="ABC123") // authentication 
{
    TanCode=(Math.random()*1000); // generates a ßrandome number
    TanCode=parseInt(TanCode);


    console.log(`Welcome to your online banking. \n For further operations please enter this TAN code:  ${TanCode}`)
}else{
    console.log("Get out of here you ....!");
}


// ------- Account Balance
let InputTan=2223;
if(InputTan==TanCode)
  {
    console.log(AccountBalance);
  }else
    {
        console.log("Your TanCode is Wrong!");
    }


    */

//---------- using Math.ceil() and floor()

let Price=35.00001;     // 35.000   35.34341  . . . 36
//console.log(Math.ceil(Price));  // 36
//console.log(Math.floor(Price)); //35


// console.log(Math.max(2,4,454454,7777777, 999999999,1)); gives us th biggest number in the input collection
//console.log(Math.min(2,4,454454,7777777, 999999999,1)); 
