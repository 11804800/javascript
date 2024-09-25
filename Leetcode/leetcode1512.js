//A pair (i, j) is called good if nums[i] == nums[j] and i < j.
//in an array same elements pairs where the index number is not same
//time O(n) space O(n)
function goodPairs(nums)
{
    let count=0;
    let obj={};

    for(let n of nums) 
    {
       if(obj[n])
       {
        obj[n]++;
       }
       else
       {
        obj[n]=1;
       }
    }


    for(let n in obj)
    {
        let i=(obj[n]*(obj[n]-1))/2;
        count+=i;
    }

    console.log(count);
}


goodPairs([1,2,3,1,1,3,4]);
// goodPairs([1,1,1,1]);


