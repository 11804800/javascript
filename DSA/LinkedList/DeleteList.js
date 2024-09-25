class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var Head = new Node(4);
var Second = new Node(5);
Head.next = Second;
var Third = new Node(1);
Second.next = Third;
var Fourth = new Node(9);
Third.next = Fourth;



function RemoveNode(Head,node) {
  let head = Head.next;
  let temp=Head;
  while (temp != null) {
    if (node === head.data) {
      console.log("found");
      temp.next=head.next;
      temp=null;
      break;
    }
    temp = temp.next;
    head=head.next;
  }
}

RemoveNode(Head,5);

let head = Head;
while (head != null) {
  console.log(head.data);
  head = head.next;
}

