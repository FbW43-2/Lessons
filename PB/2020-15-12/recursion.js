
'use strict';

function countDown1(number){

// 10 , 9 , 8 , 7, .....

        for(let index=number; index>0 ; index--)
            console.log(index);

}




  // input => 3      3,2,1

// for 
// function(3) = function (2)





// countDown in recursive mode   

function countDownRecursive(number)
{
     console.log(number);  
     number=number-1; 
 
     if(number>0)
       countDownRecursive(number)
}



// n! = n* (n-1)!  ==>   4! = 4 * 3 * 2   =24   


function Factorial1(number) // iterative solution
{
    let intFactorial=number;
    for(let index=number-1 ; index > 1 ; index--) // index=2, 1
        intFactorial=intFactorial * index;  //intFactorial=4*3 ,  intFactorial = 12 *2 , intFactorial= 24

    
    return intFactorial;

}



function FactorialRecursive (n)  // recusive solution     function
{

    //   //   n!= n * (n-1)!   0 = 1

    if(n==0)
       return 1;
    else 
       return n * FactorialRecursive(n-1);

}


let FactorialRecursiveExpression = function (n)  //   function expression
{

    //   //   n!= n * (n-1)!   0 = 1

    if(n==0)
       return 1;
    else 
       return n * FactorialRecursiveExpression(n-1);

}

let FactorialRecursiveArrow = (n) =>  //    arrow function  ES6
{

    //   //   n!= n * (n-1)!   0 = 1

    if(n==0)
       return 1;
    else 
       return n * FactorialRecursiveArrow(n-1);

}

/*

The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


*/

function Fibonacci(number){

    if(number<2)
       return number;
    else 
       return Fibonacci(number-1)+Fibonacci(number-2);
       
}




//-------------------------------------------


//countDownRecursive(5);
let inputNumber=7;
if(inputNumber>0)
    //console.log(`The factorial of ${inputNumber} is  ${FactorialRecursive(inputNumber)}`);

for(let Index=0;Index<20; Index++) 
    console.log(Fibonacci(Index));


