class SpaceObject {
    constructor(objectName) {
        this.name = objectName;
    }
}

class Galaxy extends SpaceObject {
    systems = [];

    constructor(galaxyName) {
        super(galaxyName);
    }

    addPlanetarySystem(system) {
        this.systems.push(system);
    }

    displayGalaxy() {
        console.log(`Galaxy name: ${this.name}`);
        console.log("Displaying planetary systems:");
        console.log(this.systems);
    }
}

class PlanetarySystem extends SpaceObject {
    constructor(star, planets /* array */, systemName) {
        super(systemName);
        
        star.addReferenceToSystem(this);
        this.star = star;
        
        // Planets
        // 1) We make sure that there is at least 1 planet
        // 2) We assign this planetary system to each planet in the array
        if (planets.length === 0)
            throw Error("A system needs to have at least 1 planet");
        
        for (var p of planets)
            p.addReferenceToSystem(this);

        this.planets = planets;
    }
}

class Star extends SpaceObject {

    planetarySystem = null;

    constructor(starName) {
        super(starName);
    }

    addReferenceToSystem(system) {
        if (this.planetarySystem !== null)
            throw Error(`The star ${this.name} already has a system assigned. 
                The system is ${this.planetarySystem.name}. 
                The system we were trying to assign now is ${system.name}`);
        
        this.planetarySystem = system;
    }
}

class Planet extends SpaceObject {

    planetarySystem = null;

    constructor(positionFromStar, satellites, planetName) {
        super(planetName);
        this.positionFromStar = positionFromStar;
        this.satellites = satellites;
    }

    addReferenceToSystem(system) {
        // TODO: add check here later...
        this.planetarySystem = system;
    }

    getSun() {
        return this.planetarySystem.star;
    }
}

class Satellite extends SpaceObject {
    constructor(positionFromPlanet, planet, satelliteName) {
        super(satelliteName);
        this.planet = planet;
        this.positionFromPlanet = positionFromPlanet;
    }
}

class Moon extends Satellite {
    constructor(positionFromPlanet, planet, moonName) {
        super(positionFromPlanet, planet, moonName);
    }
}

class Machine extends Satellite {
    constructor(positionFromPlanet, planet, machineName) {
        super(positionFromPlanet, planet, machineName);
    }
}

// 1) Create galaxy and systems

var galaxy = new Galaxy("Milky way");

var star1 = new Star("Sun");
var planet1 = new Planet(1, [], "Planet-1");

var system1 = new PlanetarySystem(
    star1, 
    [new Planet(0, [], "Earth"), planet1], 
    "Solar System"
);

var system2 = new PlanetarySystem(
    star1, 
    [new Planet(0, [], "Obj-34"), planet1], 
    "M12"
);

galaxy.addPlanetarySystem(system1);
galaxy.addPlanetarySystem(system2);



// 2) Print the galaxy

galaxy.displayGalaxy();

// 3) Simulate destruction

// 4) Print the remaining galaxy again
