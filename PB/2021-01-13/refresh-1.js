
class Person {
    constructor(fistName, lastName, age) {
        this.fullName = fistName + ' ' + lastName;
        this.age = age;
    }
}


var person1 = new Person("John", "Malkovich", 60);
var person2 = new Person("Tom", "Cruise", 50);

console.log(person1.fullName);
console.log(person2.fullName);

// --------------------------------------------------------------------------------------------------
