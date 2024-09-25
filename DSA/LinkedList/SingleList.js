//travsing the linked list
class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null
    }
}

const Head=new Node(3);
const firstNode=new Node(4);
const thirdNode=new Node(5);
const secondNode=new Node(2);

Head.next=firstNode;
firstNode.next=thirdNode;
thirdNode.next=secondNode;

function Travse()
{
    let head=Head;
    while(head!=null)
    {
        console.log(head.data);
        head=head.next;
    }
}


function fun1(head)
{
    if(!head) return;
    fun1(head.next);
    console.log(head.data);
}

fun1(Head);

// Travse();