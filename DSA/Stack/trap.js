// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

// Input: height = [4,2,0,3,2,5]
// Output: 9


//dyanmic programming array preprocessing and twopointers
var trap = function(height) {
    let left=0;
    let right=height.length-1;

    let MaxLeft=height[left];
    let MaxRight=height[right];

    let StoredWater=0;

    //two pointer
    while(left<right)
    {
        if(MaxLeft<MaxRight)
        {
            left++;
            MaxLeft=Math.max(MaxLeft,height[left]);
            StoredWater+=MaxLeft-height[left];
        }
        else
        {
            right--;
            MaxRight=Math.max(MaxRight,height[right]);
            StoredWater+=MaxRight-height[right];
        }
    }
    return StoredWater;
};