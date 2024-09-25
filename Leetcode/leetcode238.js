// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

//uisng prefix sum and time O(n) space O(1);

function ProductExceptSelf(nums) {
  let n = nums.length;
  let product = 1;
  let zeros = 0;

  for (const num of nums) {
    if (num !== 0) {
      product = product * num;
    } else {
      zeros++;
    }
  }

  if(zeros===1)
  {
    for (let i = 0; i < n; i++) {
      nums[i] = nums[i]===0 ? product : 0;
    }
    return nums;
  }
  else if(zeros===0)
  {
    for (let i = 0; i < n; i++) {
      nums[i] = product / nums[i];
    }
  }
  else 
  {
    for (let i = 0; i < n; i++) {
      nums[i] = 0;
    }
  }

  return nums;
}

console.log(ProductExceptSelf([1, 2, 3, 4]));
console.log(ProductExceptSelf([-1, 1, 0, -3, 3]));
