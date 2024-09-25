const arr=[19,2,3,17,23,10];
let n=arr.length;
let temp;
 
function BubbleSort(arr){
    for(let i=0; i<n; i++){
        let swapprt=false;
        for(let j=0; j<n-i-1; j++){
            if(arr[j]>arr[j+1]){
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                swapprt=true;
            }
        }
        if(swapprt==false){
            break;
        }
    }
}

BubbleSort(arr);
console.log(arr);