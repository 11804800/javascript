const stack=new Array(5);
let top=-1;

function push(data)
{
    top++;
    if(top>stack.length-1)
    {
        return false;
    }
    stack[top]=data;
}


const arr=[1,2,3,4,5,6];

arr.forEach((item)=>{
    push(item);
});

console.log(stack);


const arr1=[];
arr1.push(1);
arr1.push(2);
console.log(arr1.pop());

function fun(word)
{
    let stack2=[];
    for(let i=0;i<word.length;i++)
    {
        stack2.push(word[i]);
    }
    while(stack2.length>0)
    {
        console.log(stack2.pop());
    }
}
fun("AbcDef");


const as=[1,2];
function fun(s,x)
{
    if(arr.length<0)
    {
        arr.push(x)
    }
    else
    {
        arr
    }
}