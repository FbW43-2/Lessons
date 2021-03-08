class Person {
    constructor(lname, fname, age, married){
        this.lastName = lname;
        this.firstName = fname;
        this.age = age;
        this.married = married;
    }
    fullName = () => {
        return this.firstName + " " + this.lastName;
    }

}


export default Person;