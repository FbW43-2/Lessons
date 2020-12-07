'use strict';




/*  a simple array 
let Cars = [
    1,
     555,
     64565465464
    ];
//console.log (Cars[2]);

*/

// An object must have properties


// Books is an array of objects
let Books =  [

{BookTitle :"War of Art", Author : "Steven Pressfield", Price : 35.75, Quantity : 10000},
{BookTitle :"Learning HTML in 21 Days!", Author : "Mohammadreza Ashouri", Price : 10, Quantity : 10000},
{BookTitle :"Hack Your Network!", Author : "Bill Gates", Price : 12, Quantity : 4000},
];

// For - Loop


// I look for the cheapest book

let CheapestBook= Math.min(Books[0].Price, Books[1].Price, Books[2].Price);
console.log(CheapestBook);
let StrMessage;


/*

for(let Index=0; Index < Books.length ; Index ++) {

    StrMessage = ` The Book Number ${Index+1}  -- > Book Title is \"${Books[Index].BookTitle}\", Price is $ ${Books[Index].Price}`;
    console.log(StrMessage);

}
*/



/*
console.log(Books[0].BookTitle);
console.log("$"+Books[0].Price);

Books[0].Price=25;

console.log("$"+Books[0].Price);

*/


// Insert book information 





