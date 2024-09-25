const arr=[19,2,3,17,23,10];
let n=arr.length;

function InsertionSort(arr){
    let key,j;
    for(let i=0;i<n;i++){
        key=arr[i];
        j=i-1;
        while(j>=0 && arr[j]>key)
        {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=key;
    }
}
InsertionSort(arr);
console.log(arr);