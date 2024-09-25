// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

var Head = new Node(1);
var Second = new Node(2);
Head.next = Second;
var Third = new Node(4);
Second.next = Third;

var Head2 = new Node(1);
var Second2 = new Node(3);
var Third2 = new Node(4);
Head2.next = Second2;
Second2.next = Third2;

let list1 = Head;
let list2 = Head2;

let newList=new Node(0);
let dummy = newList;

while (list1 != null && list2 != null) {
  if (list1.data <= list2.data) {
    dummy.next = list1;
    list1.next;
  } else {
    dummy.next = list2;
    list2.next;
  }

  dummy = dummy.next;
}

if (list2 === null) {
  dummy.next = list1;
} else if (list1 === null) {
  dummy.next = list2;
}

let current = newList;

while (current) {
  console.log(current.data);
  current = current.next;
}
