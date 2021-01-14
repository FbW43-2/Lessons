class Animal {
    // we assume that humans are also animals

    constructor(name) {
        this.name = name;
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    bark() {
        console.log(`${this.name} says whoof whoof!!`);
    }
}

class Person extends Animal {
    // dog = null; (A)

    constructor(firstName, lastName) {
       super(firstName + ' ' + lastName);
       this.dog = null; // (B) this is pretty much the same as (A)
    }

    // This is a member function
    printPerson() {
        console.log(this.name);
    }

    assignDog(dog) {
        this.dog = dog;
    }

    takeTheDogOut() {
        console.log(`I, ${this.name}, just let my dog ${this.dog.name} out`);
        this.dog.bark();
    }
}

const p1 = new Person("John", "Derp");
const p2 = new Person("Dean", "Keyboard");

function printPerson(person) {
    console.log(person.name);
}
printPerson(p1);
printPerson(p2);

p1.printPerson();
p2.printPerson();

const dog1 = new Dog("Bobby");

p1.assignDog(dog1);
p1.takeTheDogOut();

p2.assignDog(new Dog("Nokia"));
p2.takeTheDogOut();

p1.takeTheDogOut();