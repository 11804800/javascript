//find the pairs of elements in an array that comes equal by adding to the k
//constains time O(n) times and space O(n) times
//we are finding the number and increasing the count of that number

function findPairs(arr, k) {
    const array=new Array(201).fill(0);
    let count=0;

    for(let n of arr)
    {
        count=count+array[n]; 
        if(n-k>=0)  
        {
            array[n-k]++;
        }
        array[n+k]++; 
    }

    return count;
    
}
function findPairs1(arr, k) {
    const obj={};
    let count=0;

    for(let n of arr)
    {
        if(obj[n])
        {
            count=count+obj[n];
        }

        if(obj[n-k])
        {
            obj[n-k]++;
        }
        else
        {
            obj[n-k]=1;
        }

        if(obj[n+k])
        {
            obj[n+k]++;
        }
        else
        {
            obj[n+k]=1;
        }
    }

    return count;
    
}

console.log(findPairs([3,2,1,5,4],2));
console.log(findPairs1([3,2,1,5,4],2));