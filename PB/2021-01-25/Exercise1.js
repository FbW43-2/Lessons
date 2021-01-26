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


    InsertNodeHead(_data){ // newnode = 0

         // 1 -> 2 - > 3 ->4

          let newNode=new Node(_data); // create a new node with data =0
          newNode.next=this.head; // [0] ->  1 -> 2 - > 3 ->4

          this.head=newNode; // the new node is now the head 

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

      while(CurrentNode != null){
          
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




    RemoveNode(_data){


    let CurrentNode=this.head; // we start from the head node

    if(this.head.data == _data){ // check whether the head node is our target node
        this.head=null; // if yes -> remove it
    }else{

            while(CurrentNode !=null){
                
                
                            if(CurrentNode.next.data== _data){ // we find the target node is the next one
                                // now it's time to remove the node

                                CurrentNode.next=CurrentNode.next.next;
                                break; // get out of the while block

                            }
                            
                CurrentNode=CurrentNode.next; // moving to the next node until we find the target node for removing 
            }

    }

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


myLinkedlist.InsertNodeHead(0);

myLinkedlist.PrintAll(); // to show whether we could remove the node (3)  properly



