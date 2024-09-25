// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function subarray(nums){
    let max=nums[0];
    let sum=0;
    for(let i=0;i<=nums.length-1;i++){
        sum=sum+nums[i];
        max=Math.max(max,sum);
        if(sum<0){
            sum=0;
        }
    }
    return max;
    
}
console.log(subarray([-2,1,-3,4,-1,2,1,-5,4]));