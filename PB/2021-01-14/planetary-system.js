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

/**
 * Direct bodies of a Planetary System.
 * Objects extending this class have a reference to the system they belong to.
 */
class PlanetarySystemBody extends SpaceObject {
    
    planetarySystem = null;

    constructor(bodyName) {
        super(bodyName);
    }

    addReferenceToSystem(system) {
        if (this.planetarySystem !== null)
            throw Error(`The object ${this.name} already has a system assigned. 
                The system is ${this.planetarySystem.name}. 
                The system we were trying to assign now is ${system.name}`);
        
        this.planetarySystem = system;
    }
}

class Star extends PlanetarySystemBody {
    constructor(starName) {
        super(starName);
    }
}

class Planet extends PlanetarySystemBody {
    
    constructor(positionFromStar, satellites, planetName) {
        super(planetName);
        this.positionFromStar = positionFromStar;
        this.satellites = satellites;
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

var system1 = new PlanetarySystem(
    new Star("Sun"), 
    [
        new Planet(0, [], "Earth"), 
        new Planet(1, [], "Planet-1")
    ], 
    "Solar System"
);

var system2 = new PlanetarySystem(
    new Star("Orion"), 
    [new Planet(0, [], "Obj-34")], 
    "M12"
);

galaxy.addPlanetarySystem(system1);
galaxy.addPlanetarySystem(system2);

// 2) Print the galaxy

galaxy.displayGalaxy();

// 3) Simulate destruction

// 4) Print the remaining galaxy again
