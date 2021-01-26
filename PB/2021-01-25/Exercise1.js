/* Linked List Exercise 1:

Implement the following methods/functions in the linkedlist class:

1- Insert a node at the head of a linked list
2- Print all elements of a linked list with the "While" loop
3- Insert a Node at the tail (ending node) of a Linked List
4- Delete a Node in a linked list
5- Print all nodes' data in reverse

*/


class Stack {   // because of reverse printing

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




// node  list

class Node {


    data;
    next;

    constructor(_data){

        this.data=_data;
        this.next=null;

    }

}


class Linkedlist {


    head;// head node
  


    constructor(){

        this.head=null;
        
    }



    InsertNode(_data){ // insert after the tail node

        let mynode=new Node(_data);

        if(this.head==null){
            this.head=mynode;

        }else{


            let Current=this.head;
            while(Current.next!=null){
                  Current=Current.next; //  1 -> 2 -> [3] ->null
            }

            Current.next=mynode;   // 1-> 2 -> 3 -> [4 new node] - >null;


        }

    }



    PrintAll(){

        // [1] -> 2 -> 3 -> 4 -> null

      let CurrentNode=this.head;

      while(CurrentNode !=null){
          
          console.log(CurrentNode.data); // print
          CurrentNode=CurrentNode.next;

      }


    }



    PrintAllReverse(){

            // 4 -> 3 -> 2 -> 1 
    
          let CurrentNode=this.head;// head of linkedlist
          let myPrintingStack=new Stack(); // create a new stack to hold data
    
          while(CurrentNode !=null){
              
              myPrintingStack.push(CurrentNode.data); // pushing node.data into our stack
              CurrentNode=CurrentNode.next;
    
          }
          // myPrinting stack is full in LIFO ==> [4,3,2,1]

        // now let pop the stack to print all data in reverse
          while(myPrintingStack.isEmpty() == false){

              console.log(myPrintingStack.pop()); 
          }
    

          // myPrinting stack is empty by now
    
        
    }



}


//---------------------------


let myLinkedlist=new Linkedlist();

myLinkedlist.InsertNode(1);
myLinkedlist.InsertNode(2);
myLinkedlist.InsertNode(3);
myLinkedlist.InsertNode(4);

myLinkedlist.PrintAll();
console.log('---------------------');
myLinkedlist.PrintAllReverse();
