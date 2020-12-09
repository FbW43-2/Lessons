    // String concatenation

var str1 = "Helloo"
var str2 = 'Helloo'

console.log(str1 == str2);

console.log(str1 + " " + str2);

// Mathematical expressions

var n1 = 4;
var n2 = 2;

console.log(n1 + n2);
console.log(n1 * n2);
console.log(n1 - n2);
console.log(n1 / n2);

console.log("------------------ Remainder operator examples")
/**
 * When doing the operation: number % 2
 * - if the result is 1, then the number is odd
 * - if the result is 0, then the number is even
 */

console.log(4 % 2);
console.log(5 % 2);

console.log(113 % 2);
console.log(300 % 2);

// even numbers: 0 2 4 6 8 ...
// odd numbers: -1 1 3 ... 

console.log(21 % 3); // 21 / 3 = 7, which is an integer, so there is no remainder


var num = 5;

if (num % 2 === 1) {
    console.log("It's odd");
} else {
    console.log("It's even");
}


// Boolean expressions

// What's the difference between == and === ?
console.log("------------------ == vs ===")

var var1 = 3;
var var2 = '3';
var var3 = '4';

console.log(var1 == var2);
console.log(var1 === var2);
console.log(var2 === var3);

// You (almost) always want to use ===

console.log("------------------ === and !==")

var s1 = "Helloo"
var s2 = "Helloo"
var s3 = "Ciao"

console.log(s1 === s2);
console.log(s1 !== s2);

console.log(s3 === s2);
console.log(s3 !== s2);

