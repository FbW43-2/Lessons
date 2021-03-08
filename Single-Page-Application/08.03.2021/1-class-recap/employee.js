import Person from './person.js';

class Employee extends Person{
    constructor(elname, efname, eage, emarried, company, department){
        // call the constructor of the parent class using super
        super(elname, efname, eage, emarried);
        // set the extended properties
        this.company = company;
        this.department = department;
    }

    status = () => {
        return `${this.firstName} is working at ${this.company} in ${this.department} departmant`;
    }
}

export default Employee;
