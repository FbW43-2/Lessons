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
        console.log(`Number of systems: ${this.systems.length}`);
        console.log("Displaying planetary systems:");

        for (var s of this.systems)
            s.print();
    }

    destroyPlanetarySystem(system) {
        const index = this.systems.indexOf(system);

        // if indexOf returns -1, it means that the element is not part
        // of the array
        if (index < 0) {
            console.log(`The system ${system.name} is not part of this galaxy. Nothing will happen`);
            return;
        }

        // this removes the system from the array
        const removedElement = this.systems.splice(index, 1);
        removedElement[0].destroy();
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

    destroy() {
        // destroy sun, planets, ...
        console.log(`Destroying system ${this.name}`);
    }

    print() {
        console.log(`System name: ${this.name}`);
        console.log(`Number of planets: ${this.planets.length}`);
        console.log(this.planets);
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
    
    constructor(satellites, planetName) {
        super(planetName);
        
        this.satellites = satellites;
    }

    getSun() {
        return this.planetarySystem.star;
    }

    getPositionFromStar() {
        return this.planetarySystem.planets.indexOf(this);
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

var p1 = new Planet([], "FunkyPlanet");

var system1 = new PlanetarySystem(
    new Star("Sun"), 
    [
        new Planet([], "Earth"),
        p1,
        new Planet([], "Planet-1")
    ], 
    "Solar System"
);

var system2 = new PlanetarySystem(
    new Star("Orion"), 
    [new Planet([], "Obj-34")], 
    "M12"
);

var system3 = new PlanetarySystem(
    new Star("Star-1"),
    [new Planet([], "Planet10")],
    "Sys-Admin"
);

galaxy.addPlanetarySystem(system1);
galaxy.addPlanetarySystem(system2);

// 2) Print the galaxy
console.log("------------------------------------------");
galaxy.displayGalaxy();

// 3) Simulate destruction
console.log("------------------------------------------");
galaxy.destroyPlanetarySystem(system3);
galaxy.destroyPlanetarySystem(system2);

// 4) Print the remaining galaxy again
console.log("------------------------------------------");
galaxy.displayGalaxy();