
class Door {

    //properties 

    width;
    height;
    color;
    state;
    
    // methods 

    open(){
        this.state="open";
    }

    close(){
    
        this.state="close";
        
    }

    // constructor method 

    constructor(){ // it automatically executes when you create an object from this class

        console.log("You created a default door!");
        this.width=100; //cm 
        this.height=200;
        this.color="white";
        this.state="open";

    }


}


//-----------------------------


let houseDoor= new Door(); // initialized an object , create an instance of the Door class


console.log(houseDoor.width); 
console.log(houseDoor.height); 
console.log(houseDoor.color); 
console.log(houseDoor.state); 


houseDoor.color="blue";
houseDoor.width=150;
houseDoor.height=250;
houseDoor.close();

console.log(houseDoor.width); 
console.log(houseDoor.height); 
console.log(houseDoor.color); 
console.log(houseDoor.state); 

