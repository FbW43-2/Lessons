
class Building {
    constructor() {
        this.offices = [];
    }
}

/**
 * Can be interpreted as a "Team",
 * which has 1 boss and 2 to 6 programmers
 */
class Office {
    constructor(address) {
        this.address = address;

        this.building = null;

        this.boss = null;
        this.programmers = new Set();

        this.company = null;
    }

    moveProgrammers(otherOffice) {
        if (this.company !== otherOffice.company) {
            console.log("Not the same company");
            return;
        }

        for (let prog of this.programmers)
            otherOffice.addProgrammer(prog);

        this.programmers.clear();
    }

    setCompany(company) {
        this.company = company;
    }

    unsetCompany() {
        this.company = null;
    }

    addProgrammer(programmer) {
        if (this.programmers.size >= 6) {
            console.log("Cannot add programmer");
            return;
        }

        this.programmers.add(programmer);
        programmer.assignToOffice(this);
    }

    removeProgrammer(programmer) {
        if (this.programmers.delete(programmer)) {
            programmer.unassignFromOffice();
        }
    }


    setBoss(boss) {
        this.boss = boss;
        boss.assignToOffice(this);
    }

    fireBoss() {
        if (this.boss === null) {
            return;
        }

        this.boss.unassignFromOffice();
        this.boss = null;    
    }

}

class Company {
    constructor(name) {
        this.name = name;
        this.officeSet = new Set();
    }

    removeOffice(office) {
        if (this.officeSet.delete(office)) {
            office.unsetCompany();
        }
    }

    addOffice(office) {
        this.officeSet.add(office);
        office.setCompany(this);
    }

}


class Person {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;

        this.office = null;
        this.type = type;
    }

    assignToOffice(office) {
        this.office = office;
    }

    unassignFromOffice() {
        this.office = null;
    }

    introduceYourself() {
        var workStatus = (this.office === null) ? "am unemployed" : `work for ${this.office.company.name}`;

        console.log(`Hi, I am ${this.name}, I ${workStatus} and I am a ${this.type}.`);
    }

    hasJob() {
        return this.office !== null;
    }
}

class Boss extends Person {
    constructor(name, age) {
        super(name, age, "Boss");
    }
}

class Programmer extends Person {
    constructor(name, age) {
        super(name, age, "Programmer");
    }

    /**
     * To be used when a programmer already has an office assigned
     * and wants to move to another one.
     * If you want to add the first job to this programmer then
     * use office.addProgrammer(...) functionalities.
     * 
     * You can interrogate if a programmer has a job with
     * the super-class function Person::hasJob
     * @param {office type} otherOffice 
     */
    changeJob(otherOffice) {
        if (this.office === null) {
            console.log("I don't even have a job to change in the first place");
            return;
        }

        this.office.removeProgrammer(this);
        otherOffice.addProgrammer(this);
    }
}


// ----------------------------------------------

var company1 = new Company("Google AG");

var office1 = new Office("Office Street1");
var office2 = new Office("Financial Avenue 3");

company1.addOffice(office1);
company1.addOffice(office2);



// company1.removeOffice(office1);

var pr1 = new Programmer("Johnny Cash", 45);
// pr1.introduceYourself();

office1.addProgrammer(pr1);
// pr1.introduceYourself();

var b = new Boss("Adam", 25);
b.introduceYourself();

office1.setBoss(b);

b.introduceYourself();

console.log(office1);


function sum(num1, num2) {
    return num1 + num2;
}

const sum2 = function(num1, num2) {
    return num1 + num2;
}

console.log(sum2(1, 2));