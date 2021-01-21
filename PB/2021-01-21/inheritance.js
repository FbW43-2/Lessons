

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceYourself() {
        console.log(`I am ${this.name} and I'm ${this.age} years old. My role is ${this.getRole()}`);
    }

    getRole() { /* ... */}
}

class Dog  {
    bark() {
        console.log("Woof!")
    }
}

class Worker extends Person {
    constructor(name, age) {
        super(name, age);
    }

    getRole() {
        return "Worker";
    }
}

class Boss extends Person {
    constructor(name, age) {
        super(name, age);
    }
    
    getRole() {
        return "Boss";
    }
}

var p1 = new Worker("Jerry", 25);
var p2 = new Worker("Silvia", 87);
var p3 = new Boss("Kinjal", 21);

p1.introduceYourself();
p2.introduceYourself();
p3.introduceYourself();