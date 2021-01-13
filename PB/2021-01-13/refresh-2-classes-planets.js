
class SpaceObject {
    constructor(objectName) {
        this.name = this.checkValidName(objectName);
    }

    checkValidName(name) {
        if (name === null || name === undefined)
            throw Error("No name set");
    
        if (name.length < 2)
            throw Error("The name must be at least 2 char long")
    
        // add other constraint check here...
    
        return name 
    }
}


class Planet extends SpaceObject {
    constructor(planetName) {
        super(planetName);
    }
}

class Star extends SpaceObject {
    planetarySystem = null;

    constructor(starName) {
        super(starName);
    }

    updateSystem(system) {
        if (this.planetarySystem !== null) {
            throw new Error("This sun has already been assigned to a system");
        }

        this.planetarySystem = system;
    }
}

class PlanetarySystem extends SpaceObject {
    /*
    A planetary system has at least one star and multiple planets
    */
    constructor(systemName, star) {
        super(systemName);
        this.star = star;
        this.star.updateSystem(this);
    }
}

class Metorite {

}

class Satellite extends SpaceObject {

}

class Moon extends Satellite {

}


// ------ Main program

var star = new Star("Sun");
var planet1 = new Planet("Mercury");
var planet2 = new Planet("G");

var system1 = new PlanetarySystem("Solar System", star);
console.log(`The sun's planetary system is ${star.planetarySystem.name}`);

var system2 = new PlanetarySystem("Palomar I", new Star("Orion"));