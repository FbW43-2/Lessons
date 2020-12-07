/*

String:
- Escaping special chars: `\'`, `\"`, `\n`
- Syntax debugging IV: Strings and quotes
- String interpolation: template literals, using expressions within strings
- Syntax debugging V: Unclosed quotation marks
- Getting the length of a string: `String.prototype.length`
- Getting a character in a string: bracket notation
- Syntax debugging VI: Unclosed brackets
Basic String Methods:
- Converting case with:
  `String.prototype.toUpperCase()`, `String.prototype.toLowerCase()`
- Extracting parts of a string: `String.prototype.substring()`
- Checking if a string is inside another string: `String.prototype.includes()`
- Removing padding spaces: `String.prototype.trim()`

*/


'use strict';


let BookDescription = "this is a special \'title\' .  \n this is another sentence.";  

let Number1=14;
let Number2=17;

//let StrMessage=`This is a place holder - >  ${Number1*Number2} <-- this is a place holder`;  //backstick in template literals


let Username = "TestUser";
let EmailAddress = "TestUser@dci.org";
let MobilePhoneNumber="017684954400";

let Password="ABC123";

// getting inputs from users

let StrMessage;

if(MobilePhoneNumber.length!=12)
{
   StrMessage = "This mobile phone number is INVALID!!!! \n  Get out of here... ";

}else{
   StrMessage=`Hey ${Username} Welcome to our website!  \n  This is your email: ${EmailAddress}`;  //backstick in template literals
}

// end of the validation phase
//console.log(StrMessage);
//console.log("\n \n \n ****************** \n This is the first char :" + StrMessage[1]+StrMessage[-1]); // in JavaScript locations get started from  ZERO    Hello [0]=H [1]=e ....


//let LastIndex=Username.length-1;//8
//console.log(LastIndex);

let FirstChar = Username[0];
let LastChar= Username[Username.length-1];

//console.log(FirstChar+LastChar);


//console.log(Username.toUpperCase());
//console.log(Username.toLowerCase());

let UserInputPassword="abc123";

if(Password.toUpperCase()==UserInputPassword.toUpperCase()){ // "ABC123"
  console.log("This is correct!");
}else{
  console.log("This is incorrect!!!!!");
}
















