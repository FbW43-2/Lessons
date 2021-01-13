/*
Create a planet class like this one 
Make sure it has the properties: name, diameter (in km), color
Create 8 instances of planets (use the properties of our solar system)
When you create a planet, print it's properties (in the constructor) 
*/
class Planet {
    constructor(planetName) {
        this.name = planetName;
    }
}

class Star {
    planetarySystem = null;

    constructor(starName) {
        this.name = starName;
    }

    updateSystem(system) {
        if (this.planetarySystem !== null) {
            throw new Error("This sun has already been assigned to a system");
        }

        this.planetarySystem = system;
    }
}

class PlanetarySystem {
    /*
    A planetary system has at least one star and multiple planets
    */
    constructor(name, star) {
        this.name = name;
        this.star = star;
        this.star.updateSystem(this);
    }
}

// ------ Main program

var star = new Star("Sun");

var system1 = new PlanetarySystem("Solar System", star);
console.log(`The sun's planetary system is ${star.planetarySystem.name}`);

var system2 = new PlanetarySystem("Palomar I", star);
console.log(`The sun's planetary system is ${star.planetarySystem.name}`);


// Here, we want our program to crash / throw an error, because two solar systems cannot share the same sun
// How do we plan to do this? We make sure that the star is linked to only one planetary system