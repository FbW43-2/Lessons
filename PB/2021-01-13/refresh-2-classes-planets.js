/*
Create a planet class like this one 
Make sure it has the properties: name, diameter (in km), color
Create 8 instances of planets (use the properties of our solar system)
 */
class Planet {
    constructor(planetName) {
        this.name = planetName;
    }
}

class Star {
    constructor(starName) {
        this.name = starName;
    }
}

class PlanetarySystem {
    /*
    A planetary system has at least one star and multiple planets
    */
    constructor(name, star) {
        this.name = name;
        this.star = star;
    }
}

// ------ Main program

var star = new Star("Sun");

var system1 = new PlanetarySystem("Solar System", star);
var system2 = new PlanetarySystem("Palomar I", star); // Here, we want our program to crash / throw an error!

console.log(`System ${system1.name}. Star: ${system1.star.name}`);
console.log(`System ${system2.name}. Star: ${system2.star.name}`);













// var p1 = new Planet("Earth");
// var p2 = new Planet("Mercury");
// var p3 = new Planet("Mars");

// var planets = [p1, p2, p3];



// console.log(`The sun's planetary system is: ${star.planetarySystem}`);


// var system2 = new PlanetarySystem("Palomar I", new Star("Palomar Star"));
