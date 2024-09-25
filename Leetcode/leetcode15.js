// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
//  such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

//time O(n^2) space O(n)


//twopointer fix one and update two
//first sort the array;
function ThreeSum(nums)
{
    let arr=[];
    nums.sort((a,b)=>a-b);
    for(let i = 0; i < nums.length;i++)
    {
        let j=i+1;
        let k=nums.length-1;
        
        while(j<k)
        {
            let sum=nums[i]+nums[j]+nums[k];
            if(sum==0)
            {
                arr.push([nums[i],nums[j],nums[k]]);
                j++;
                while(nums[j]==nums[j-1] && j<k)
                {
                    j++;
                }
            }

            if(sum>0)
            {
                k--;
            }
            else
            {
                j++;
            }
        }
    }
    return arr;
}

console.log(ThreeSum([-1,0,1,2,-1,4]));