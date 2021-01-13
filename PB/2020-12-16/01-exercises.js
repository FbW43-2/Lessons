/*
Multiply
Create a function that multiples a number by another number.
Rework the syntax of the function declaration so that is uses the arrow function shorthand  (browse the internet for what an arrow function is).
Write a function that accepts two numbers and validate that they are numbers.
*/

// make sure it's a number
function isANumber(num) {
    return typeof num === 'number';
}

function areNumbers(num1, num2) {
    return isANumber(num1) && isANumber(num2);
}

function multiply(a, b) {
    if (!areNumbers(a, b)) throw Error("The function accepts only numbers")

    return a * b;
}

multiply2 = (a, b) => {
    if (!areNumbers(a, b)) throw Error("The function accepts only numbers")

    return a * b;
}


// var result = multiply2(4, 7);
// console.log(`The result is ${result}`);


/*
Add Up. Create a function that takes an integer as an argument. Add up all the integers from 1 to the integer you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Examples:
sumIntFrom1ToN(4) ➞ 10
sumIntFrom1ToN(13) ➞ 91
sumIntFrom1ToN(600) ➞ 180300
*/


/* 
test table for number = 6

i           result
------------------------
-           0
1           1
2           3
3           6
4           10
5           15
6           21

*/
function sumIntFrom1ToN(number) {
    var result = 0;

    for (var i = 1; i <= number; i++) {
        result += i; // result = result + i
    }
    return result;
}

// console.log(sumIntFrom1ToN(4))
// console.log(sumIntFrom1ToN(13))
// console.log(sumIntFrom1ToN(600))

// Cubed. Create a function that takes in three numbers and returns the sum of its cubes.
// Examples:
// sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes(2) ➞ 8
// sumOfCubes() ➞ 0

function exponent(x, y) {
    var result = 1;
    for (var i = 1; i <= y; i++) {
        result *= x
    }
    return result;
}

function sumOfCubes(n1 = 0, n2 = 0, n3 = 0) {
    return exponent(n1, 3) + exponent(n2, 3) + exponent(n3, 3);
}

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


function sumOfCubes2(...numbers) {
    let cube = (x) => exponent(x, 3);

    let sum = 0;

    for (let index = 0; index < numbers.length; index++) {
        sum += cube(numbers[index]);
    }

    return sum;
}


console.log(sumOfCubes2());
console.log(sumOfCubes2(2, 4));
console.log(sumOfCubes2(2, 4, 5, 2, 1, 3, 5, 2, 1, 2, 6));
