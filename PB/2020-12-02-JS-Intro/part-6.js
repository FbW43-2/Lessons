const NAMES = ["Hector of Troy", "Helen", "Achilles"]

let index = 0;

const COMMON_NAME = NAMES[index];

var person1 = {
    name: COMMON_NAME,
    age: 19
};

var person2 = {
    name: COMMON_NAME,
    age: 21
};

console.log(person1.name);
console.log(person1.name == person2.name);
