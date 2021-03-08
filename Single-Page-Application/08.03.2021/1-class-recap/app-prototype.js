Array.prototype.capitlize = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase()
        
    }
}
let arr = ['a', 'f', 'r'];

console.log(arr);
arr.capitlize()
console.log(arr);

let str = "some string";
//let str1 = new String('this is a string');

// use prototype to override old method
String.prototype.indexOf = function(){
    return('this function not gonna work again');
}

console.log(str.indexOf('o'));



