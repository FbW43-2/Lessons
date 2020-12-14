
'use strict';


function Message(strMsg){ // argument, function input

    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(`+++++++++++++++++   ${strMsg}   +++++++++++++++++++++++`);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
  
}


function CharCount(strInput) 
{

    if(strInput==undefined){
      console.log("Warning: Please give me an input string!");
      return 0;
    }else
      return  strInput.length;
    
}


function SQL(intInp){ return intInp*intInp;}


//----------------------------------- end of function declarations  -------------------






Message("Welcome to Apple"); // reference , callsite, function call, invoke  , parameter

/*
some statements;
some statements;
some statements;
some statements;
*/




let City="Berlin";

//CharCount();  // it return 0

let inputStrLen=CharCount(City); // assign a function return value to a variable!

console.log(City+ " has " + inputStrLen + " characters!");

Message(" Goodbye Apple User")