//enqueue : push operation or adding the element
//Dequeue : pop operation or removing the element
//peek : finding the first element
//front : finding the first element same as peek;
//rear : finding the last element
//isempty
//isfull

class Queue {
  constructor(data) {
    this.size = data;
    this.arr = new Array(this.size);
    this.rear = -1;
    this.front = -1;
  }

  enqueue(data) {
    if (this.rear == this.size - 1) {
      console.log("full");
      return;
    }
    if (this.front == -1) {
      this.front = 0;
    }
    this.rear++;
    this.arr[this.rear] = data;
    return;
  }

  print() {
    if (this.front == -1) {
      console.log("empty");
      return;
    }
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.arr[i]);
    }
  }
  dequeue(data) {}
}

const ob = new Queue(5);
ob.enqueue(1);
ob.enqueue(2);
ob.enqueue(3);
ob.enqueue(4);
ob.enqueue(5);
ob.enqueue(6);
ob.print();
