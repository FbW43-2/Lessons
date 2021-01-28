
function hello1(name) {
    console.log("Hello " + name);
}

const hello2 = function(name) {
    console.log("Hello " + name);
}

hello1("John");

hello2("Silvia");

const hello3 = (name) => {
    console.log("Hello " + name);
}

hello3("Kinjal");

function square0(n) {
    return n * n;
}

console.log(square0(5));

const square1 = function(n) {
    return n * n;
}

console.log(square1(2));

const square2 = (n) => {
    return n * n;
}

console.log(square2(3));

const square3 = (n) => n * n;

console.log(square3(4));