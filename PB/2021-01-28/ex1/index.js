

// var pElements = document.getElementsByTagName("p");


// returns an iterable html collection
var myClassElements = document.getElementsByClassName("my-class");

// console.log(myClassElements);

for (var el of myClassElements) {
    // console.log(`The element's text is: ${el.textContent}`);
    el.textContent = "Just some content...";
}

var el = document.getElementById("p-1");

// if (el) {
//     el.textContent = "I am p-1";
// } else {
//     console.error("the element does not exist");
// }

// var pSpecials = document.getElementsByClassName("p-special");

var div1 = document.getElementById("div-1");

console.log(div1.innerHTML);
console.log(div1.innerText);
console.log(div1.textContent);