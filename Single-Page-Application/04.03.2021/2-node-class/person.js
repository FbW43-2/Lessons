class Person {
    constructor(fname, mname, lname, age, married){
        this.firstName = fname;
        this.middleName = mname;
        this.lastName = lname;
        this.age = age;
        this.married = married;
    }

    fullName= () => {
        return this.firstName + " " + this.middleName + " " + this.lastName
    }
}

export default Person;