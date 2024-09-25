// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

//complexity 
// time O(n)
//space O(n)

function TwoSum(nums,k)
{
    const obj={};
    for(let i=0;i<nums.length;i++)
    {
        if(obj[k-nums[i]]!==undefined)
        {
            return [obj[k-nums[i]],i];
        }
        else
        {
            obj[nums[i]]=i;
        }
    }
}

console.log(TwoSum([3,3,3],6));