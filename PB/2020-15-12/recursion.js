
'use strict';

function countDown1(number){

// 10 , 9 , 8 , 7, .....

        for(let index=number; index>0 ; index--)
            console.log(index);

}


// countDown in recursive mode   

function countDownRecursive(number)
{
     console.log(number);
     
     const constNumber=number -1   // using const make your code more stable, specially on the old JS engines
    // number=number-1; //number--
    // stop condition
     if(constNumber>0)
       countDownRecursive(constNumber)
}



// n! = n* (n-1)!  ==>   4! = 4 * 3 * 2   =24   


function Factorial1(number) //4
{
    let intFactorial=number;
    for(let index=number-1 ; index > 1 ; index--) // index=2, 1
        intFactorial=intFactorial * index;  //intFactorial=4*3 ,  intFactorial = 12 *2 , intFactorial= 24

    
    return intFactorial;

}


function FactorialRecusrive(number)
{

}




//-------------------------------------------


//countDownRecursive(5);

console.log(Factorial1(5));