
const arr=[19,2,3,17,23,10];
let n=arr.length;
arr.sort((a,b) =>a-b);
console.log(arr);
function BinarySearch(arr,key)
{
    let start=0;
    let end=n-1;
    while(start<=end)
    {
        let mid=Math.floor((start+end)/2);
        if(arr[mid]==key)
            return mid;
        if(arr[mid]<key)
            start=mid+1;
        else
            end=mid-1;
    }
}

console.log(BinarySearch(arr,17));