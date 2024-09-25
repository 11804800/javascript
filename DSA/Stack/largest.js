function largest(arr)
{
    let stack=[];
    let element=0;

    for(let i=0;i<stack.length;i++)
    {
        while(stack.length>0 && stack[stack.length-1]>arr[i])
        {
            element=stack[stack.length-1];
            stack.pop();
        }
    }
}