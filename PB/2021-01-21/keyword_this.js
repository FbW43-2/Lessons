

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log("Woof woof!");
    }
}

class Owner {
    constructor(name, dog) {
        this.name = name;
        this.dog = dog;
    }

    printMe() {
        console.log(this);
    }


    takeTheDogOut() {
        console.log(`I'm taking ${this.dog.name} for a walk`);
        this.dog.bark();
    }
}


var owner1 = new Owner("Sam", new Dog("Bobby"));
var owner2 = new Owner("Jerry", new Dog("Klaus"));

// console.log(owner1.dog.name);
// console.log(owner2.dog.name);

owner1.takeTheDogOut();
owner2.takeTheDogOut();

owner1.printMe();
owner2.printMe();