
//          0         1        2         3
var arr1 = ["Banana", "Apple", "Orange", "Kiwi"];
var index = 4;

console.log(`Element at index ${index}: ${arr1[index]} -- ${arr1}`);

arr1[index] = "Strawberry";

console.log(`Element at index ${index}: ${arr1[index]} -- ${arr1}`);

arr1[0] = arr1[3];

console.log(`${arr1}`);

// I want to get the numerical index of an element

var fruit1 = "Orange";
console.log(`The fruit ${fruit1} is in position ${arr1.indexOf(fruit1)}`);

fruit1 = "Banana";
console.log(`The fruit ${fruit1} is in position ${arr1.indexOf(fruit1)}`);


var arr2 = [2, 4, 6, 8, 10, 12];

console.log(arr2.indexOf(12));
console.log(arr2.indexOf(13));


// Add an element to an array

var arr3 = ["Hamburg", "Barcelona", "Bruxelles"];
console.log(arr3);

arr3.push("Tiblisi", "Mumbai"); // push always adds the element to the end
console.log(arr3);

var arr3Length = arr3.unshift("Belgrade", "Zürich");
console.log(`${arr3} - ${arr3Length}`);

// Removing elements from and array

// pop
console.log(arr3.pop());
console.log(arr3);

// shift
console.log(arr3.shift());
console.log(arr3);

arr3.reverse();
console.log(arr3);