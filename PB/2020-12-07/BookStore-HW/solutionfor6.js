
'use strict';

//5. [This is optional] insert information to your array via a for-loop

let ObjArrayBooks=[]; 
let BookTitle;

//A = asciicode 65
//B = 66

for(let Index=0;  Index < 26 ; Index++)
   {
      
       ObjArrayBooks.push( {Title: "Book Title "+String.fromCharCode(65+Index), ISBN: parseInt(Math.random()*100000000), PublishedYear: 2000 + Index, Price : parseInt(Math.random * 10000)} );
   }


 //console.log(ObjArrayBooks);



 //console.log(ObjArrayBooks.find(( {Title}) => Title === 'Book Title W'));   // finding a keyword in an array of book objects ...