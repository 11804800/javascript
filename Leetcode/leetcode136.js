// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

//hint:bitwise xor(^) 0^x=x x^x=0

function SingleUnit(nums)
{
    let ans=0;
    for(let i=0;i<nums.length;i++)
    {
        ans= ans^nums[i];
    }

    return ans;
}

console.log(SingleUnit([2,2,3,2]));