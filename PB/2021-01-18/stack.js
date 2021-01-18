
class Stack {

    data;
    top;


    constructor(){

        this.data=[];
        this.top=0;
    }

    push(element){

        this.data[this.top]=element;
        this.top=this.top+1;

    }

    pop(){

        // the stack shoukd not be empty

       if(this.isEmpty() === false)
       {
        this.top=this.top-1; 
        return this.data.pop();

       } 
    

    }

    isEmpty(){

        return this.top===0; // true
    }


}



let mystack=new Stack();
console.log(mystack);

mystack.push(7);

console.log(mystack);


/*

console.log(mystack);


mystack.pop();
mystack.pop();


console.log(mystack);

mystack.pop(); // now the stack is empty 
mystack.pop(); // nothing happens

console.log(mystack);

*/