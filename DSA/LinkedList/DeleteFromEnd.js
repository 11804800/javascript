// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]


class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null
    }
}

var Head=new Node(1);
var Second=new Node(2);
Head.next=Second;
var Third=new Node(3);
Second.next=Third;
var Fourth=new Node(4);
Third.next=Fourth;
var Fifth=new Node(5);
Fourth.next=Fifth;

let Dummy=new Node(0);
Dummy.next=Head;
let left=Dummy;
let right=Dummy;
let n=2;

while(right!=null && n>0)
{
    right=right.next;
    n--;
}


while(right.next!=null)
{
    left=left.next;
    right=right.next;
}

left.next=left.next.next;


let head=Dummy;

while(head)
{
    console.log(head.data);
    head=head.next;
}