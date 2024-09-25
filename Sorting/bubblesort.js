const arr=[6,0,3,5,7];
let n=arr.length;

for(let i=0; i<n; i++)
{
    let swap=false;
    for(let j=0; j<n-i-1; j++)
    {
        if(arr[j]>arr[j+1])
        {
            // swap arr[j] and arr[j+1]
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            swap=true;
        }
        if(!swap)
        {
            break;
        }
    }
}
console.log(arr);