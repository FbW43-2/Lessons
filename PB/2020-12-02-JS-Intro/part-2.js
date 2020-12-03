// Primitive Data Types

// Number
console.log("------------------ Part 1: Numbers")

let var1 = 4;       // integer
console.log(var1);
var1++;
console.log(var1);
var1--;
console.log(var1);

let var2 = 3.14;    // float / double

console.log(var1 + var2);

let var3 = 5_000_000; // 5'000'000 = 5.000.000 = 5 millions
let var4 = 5000000; 

console.log(var3 - var4);

let var5 = var4 - var1 * 250;
console.log(var5);

var5 = (var4 - var1) * 250;
console.log(var5);
console.log("" + var5);

// Strings
console.log("------------------ Part 2: Strings")
var c1 = "Hello, "
var c2 = "World!"
console.log(c1 + c2);

console.log(c1 + c2 + " " + var5);

// Strings and Numbers
console.log("------------------ Part 3: Strings and Numbers")
var n1 = 5;
var n2 = '3';

console.log(n1 + n2);
console.log(n1 + parseInt(n2));

var n3 = parseInt("n3");
console.log(n3); // prints NaN = Not A Number

// typeof
console.log("------------------ Part 4: typeof")
console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);


// Booleans
console.log("------------------ Part 5: Booleans")

/*
This is a multi-line comment
*/

var b1 = true;
var b2 = false;

var nn1 = 4;
var nn2 = 4;

var b3 = (nn1 == nn2);

console.log(b3);

var s1 = "Hello"
var s2 = "Hello!";

console.log(s1 == s2);

// Nulls
console.log("------------------ Part 6: Null vs undefined")
var nn3 = 6;
nn3 = null;

console.log(nn3 + 7);

var ss1 = "Hola"
var ss2 = null;

console.log(ss1 + ss2);

// undefined means a variable has been declared but has not 
// yet been assigned a value
let var99;
console.log(var99); // it will print undefined
