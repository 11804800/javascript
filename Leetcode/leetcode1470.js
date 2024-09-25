// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

//complexity

//time O(n); space O(n)

//input [1,1,2,2], n = 2
//output [1,2,1,2]

var shuffle = function(nums, n)
{
    for(let i = 0; i < nums.length; i++)
    {
        let currentpos=i;
        let currentNum=nums[i];
        while(currentNum>0)
        {
            let newpos;
            if(currentpos<n)
            {
                newpos=2*currentpos;
            }
            else
            {
                newpos=2*(currentpos-n)+1;
            }
            let newnum=nums[newpos];
            nums[newpos]=-currentNum;
            currentNum=newnum;
            currentpos=newpos;
        }
    }
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] < 0) {
        nums[i] = -nums[i];
        }
        }
        return nums;
}

console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // [1,2,1,2]
