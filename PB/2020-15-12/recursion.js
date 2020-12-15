
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


countDownRecursive(5);