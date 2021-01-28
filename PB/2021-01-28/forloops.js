
var fruits = ["apple", "orange", "banana", "kiwi", "kaki", "tangerine", "pear", "plum"];
var animals = ["bird", "tiger", "ant"];

// loop with index
console.log("---------------------------------------------------------");
for (var i = 0; i < fruits.length; i++) {
    console.log(i);
    var el = fruits[i];
    console.log(el);
}

// loop without index
console.log("---------------------------------------------------------");
for (var el of fruits) {
    console.log(el);
}

// foreach with external callback
console.log("---------------------------------------------------------");

function callback1(element, index, array) {
    console.log(index + " - " + element + " - " + array);
}

fruits.forEach(callback1);
animals.forEach(callback1);

// foreach with arrow function
console.log("---------------------------------------------------------");

fruits.forEach((element, index) => console.log(index + ": " + element));