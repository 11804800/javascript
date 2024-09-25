const arr=[78,67,56,63,74];
let =arr.length;
let temp;
for(let i=0; i<arr.length; i++)
{
    let min=i;
    for(let j=i+1; j<arr.length; j++)
    {
        if(arr[j]<arr[min])
        {
            min=j;
        }
    }
    temp=arr[min];
    arr[min]=arr[i];
    arr[i]=temp;
}
console.log(arr);