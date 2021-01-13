

class Person {  //parent class


        firstname;
        lastname;
        address;
        nationalID;
        mobilePhone;
        gender;


        constructor(_firstname,_lastname,_address,_nationalID,_mobilePhone,_gender){

            this.firstname=_firstname;
            this.lastname=_lastname;
            this.address=_address;
            this.nationalID=_nationalID;
            this.mobilePhone=_mobilePhone;
            this.gender=_gender;
            

        }


}



class Teacher extends Person  { // child class

        


        baseSalary;
        taxID;

        constructor(_firstname,_lastname,_address,_nationalID,_mobilePhone,_gender,_baseSalary,_taxID){
            
            super(_firstname,_lastname,_address,_nationalID,_mobilePhone,_gender); // calling the parent class's constructor()
            this.baseSalary=_baseSalary;
            this.taxID=_taxID;
            
        }
  

}


class Student extends Person {
    
    level;
    score;
    studentID;

    constructor(_firstname,_lastname,_address,_nationalID,_mobilePhone,_gender,_level){
            
        super(_firstname,_lastname,_address,_nationalID,_mobilePhone,_gender); // calling the parent class's constructor()
        
        this.level=_level;
        this.score=0;
        this.studentID=this.studentIDGenerator();
        

    }


   studentIDGenerator(){
       
      return Math.floor(Math.random()*10000)+100000; // create a random number and assign it to Student ID

   }

   setStudentID(nmr){
       this.studentID=nmr;
   }

}



// -------------------------------



let testStudent=new Student("Mo","Ashouri","Berlin Potsdammer Platz","127777","017699343434","male","A");
let testStudent2=new Student("Abdulla","Heidar","Berlin Potsdammer Platz","127777","017699343434","male","A");
//testStudent.setStudentID(123456789);
console.log(testStudent);
console.log(testStudent2);


