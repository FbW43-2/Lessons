
class LinkedListNode{

      data;
      next; // pointer

      constructor(_data){

        this.data=_data;
        this.next=null;

      }


}


//-----------------------

let node1=new LinkedListNode(1);
let node2=new LinkedListNode(7);
let node3=new LinkedListNode(21);


node1.next=node2;
node2.next=node3;
// node1 -> node2 -> node3 ->null
node3.next=null;


console.log(node1);

console.log(node1.data);
console.log(node1.next.data); // ? 7 
console.log(node2.next.data);// ?




