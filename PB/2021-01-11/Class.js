
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

    ChangeColor(userColor){
        this.color=userColor;
    }

    // constructor method 

    constructor(userWidth,userHeight,userColor,userState){ // it automatically executes when you create an object from this class


        console.log("You created a default door!");
        this.width=userWidth;
        this.height=userHeight;
        this.color=userColor;
        this.state=userState;

    }


}


//-----------------------------




//blackbox 

let houseDoor= new Door(100,400,"green","close"); // initialized an object , create an instance of the Door class

console.log(houseDoor.width);
console.log(houseDoor.height);
console.log(houseDoor.color);
console.log(houseDoor.state);

houseDoor.ChangeColor("purple");
console.log(houseDoor.color);






