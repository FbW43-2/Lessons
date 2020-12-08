/*

Strings:
String.fromCharCode(ASCII CODE) it returns a character
str.replace 
str.concat(text1, text2);
The charAt() method returns the character at a specified index (position) in a string
indexOf() returns the first occurrence of a specified text in a string
var pos = str.indexOf("locate");
using eval() to eval are treated as source code
console.log(eval(s1))         // returns the number 4
split() method

*/


'use strict';

//65 is the ascii code for A, B =66 .... Z=96   a=97

//console.log(String.fromCharCode(65) + String.fromCharCode(66));
//ABC ...XWZ

/*for(let Index=65 ; Index <= 90 ; Index++)
    console.log(String.fromCharCode(Index));
*/



//console.log(Company.replace("Apple","Microsoft"));

//Company=Company.replace("Apple","Microsoft");



/*
// -------- String Concatination -----------
console.log(Company + ", but is not the best one!");
console.log(Company.concat(", but is not the best one!"));
Company=Company.concat(", but is not the best one!");   // it returns  'Apple is a software company, but is not the best one!'
console.log(Company);

*/



let strNews="Today's we are happy to annoucne that Apple has been chosen as the best software company in the world, Apple offers software with blockchain!";
let strKeyword="Apple";

let StartIndex = strNews.indexOf(strKeyword);
let LastIndex = strNews.lastIndexOf(strKeyword);


// Editor part

let StrOutput=''; // This is a string
for(let Index=(StartIndex+strKeyword.length); Index < LastIndex ; Index++)
   {
        StrOutput=StrOutput.concat(strNews.charAt(Index));
       
   }
   console.log(StrOutput);







