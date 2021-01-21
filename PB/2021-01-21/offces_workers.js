
class Building {
    constructor() {
        this.offices = [];
    }
}

class Office {
    constructor() {
        this.building = null;

        this.boss = null;
        this.programmers = [];

        this.company = null;
    }

    moveProgrammers(otherOffice) {
        if (this.company !== otherOffice.company) {
            console.log("Not the same company");
            return;
        }

        if (!(otherOffice.programmers.length === 0)) {
            console.log("The programmers of the other office still need to be placed somewhere");
            return;
        }

        otherTeam.programmers = this.programmers;
        this.programmers = [];
    }

}

class Company {
    constructor() {
        this.teams = [];
    }
}


class Person {

}

class Boss extends Person {

}

class Programmer extends Person {

}