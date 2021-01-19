class Queue {


    data;
    head;
    tail;


    constructor(){

          this.data=[];
          this.head=0;
          this.tail=0;

    }


    enqueue(element){

        this.data[this.tail]=element;
        this.tail=this.tail+1;
    }



    dequeue(){
              
        
      if(this.isEmpty === false) { // when the queue is not empty then ...

        this.data[this.head]=NaN;
        this.head=this.head+1;

      }

    }

    isEmpty(){

        return this.tail === 0;
    }



}

//---------------

let BusQ=new Queue();
BusQ.enqueue(7);
BusQ.enqueue(1);
BusQ.enqueue(2);
BusQ.enqueue(8);
console.log(BusQ);
BusQ.dequeue();
console.log(BusQ);
BusQ.dequeue();
console.log(BusQ);





