// const heriberto = {
//     firstName: "heriberto",
//     middleName: "Rodriguez",
//     lastName: "Hernandez",
//     age: 47,
//     married: false
// }

// const ahmad = {
//     firstName: "Ahmad",
//     middleName: "",
//     lastName: "Osman",
//     age: 35,
//     married: true
// }

import Person from "./person.js";

const heriberto = new Person("heriberto", "Rodriguez", "Hernandez", 47, false);
const ahmad = new Person("Ahmad", "", "Osman", 35, true);

console.log(heriberto);
console.log(heriberto.fullName());
console.log(heriberto.age);

heriberto.status  = function(){
    return `${this.firstName} is ${this.married ? "married" : "not maried"} and ${this.age} years old`;
}

console.log(heriberto.status());


Person.prototype.birthYear = function(){
    return 2021 - this.age;
}

console.log(heriberto.birthYear());
// const arr = new Array(2);

// arr[0] = 1;
// arr[1] = 2;

// arr.sum = function(){
//     return this[0] + this[1];
// }

// console.log(arr.sum());






