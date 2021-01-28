
var fruits = ["apple", "orange", "banana", "kiwi", "kaki"];
console.log(fruits);


// We remove the last element with pop
fruits.pop();
console.log(fruits);


// We want to remove 
// const fruitToRemove = "tangerine";
const fruitToRemove = "apple";

var indexToRemove = fruits.indexOf(fruitToRemove);

if (indexToRemove > -1) {
    fruits.splice(indexToRemove, 1);
}

console.log(fruits);