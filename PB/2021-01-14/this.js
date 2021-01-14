class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(this);
    }
}


const p1 = new Person("John", 45);
const p2 = new Person("Darren", 62);

p1.display();
p2.display();