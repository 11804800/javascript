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
var Sixth=new Node(6);
Fifth.next=Sixth;
var Seventh=new Node(7);
Sixth.next=Seventh;
var Eight=new Node(8);
Seventh.next=Eight;
var Nine=new Node(9);
Eight.next=Nine;


let counter=1;
let mid=Head;
let head=Head;

while(head.next!=null)
{
    if(counter%2==0)
    {
        mid=mid.next;
    }
    head=head.next;
    counter++;
}

console.log(mid.data);
