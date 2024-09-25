//using two pointers

class Node
{
    constructor(data)
    {
        this.data=data;
        this.next=null
    }
}

var Head=new Node(1);
var Second=new Node(1);
Head.next=Second;
var Third=new Node(1);
Second.next=Third;
var Fourth=new Node(1);
Third.next=Fourth;


var head=Head;
let arr=[];
while(head!=null)
{
    arr.push(head.data);
    head=head.next;
}


let left=0;
let right=arr.length-1;

let result=false;

while(left<=right)
{
    if(arr[left]!==arr[right])
    {
        result=false;
        break;
    }
    else
    {
        result=true;
    }
    left++;
    right--;
}

console.log(result);

