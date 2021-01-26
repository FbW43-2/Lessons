
class LinkedListNode{

      data; // could music, video, URL , etc.git
      next; // pointer

      constructor(_data){

        this.data=_data;
        this.next=null;

      }

}


class SinglyLinkedList{

   LinkedListNode head;
   LinkedListNode tail;


   constructor(_data){

         this.head.data=_data;
         this.head.next=null;
         this.tail=head;
         
   }

   GetHead(){
       
         return this.head;
   }

   GetTail(){

         return this.tail;
   }



}


//-----------------------

let node0=new LinkedListNode(99); // the first node , i.e., head
let node1=new LinkedListNode(1);
let node2=new LinkedListNode(7);
let node3=new LinkedListNode(21); // the last node , i.e., tail

node0.next=node1; // new head
node1.next=node2;
node2.next=node3;
// node1 (head) -> node2 -> node3 (tail) ->null
node3.next=null;


console.log(node1);

console.log(node1.data);
console.log(node1.next.data); // ? 7 
console.log(node2.next.data);// ?




