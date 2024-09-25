var nextGreaterElement = function(nums1, nums2) {
    // if (nums1 === null || nums2 === null || nums1.length === 0 || nums2.length === 0) {
    //   return [];
    // }

    // let m     = new Map();
    // let stack = [];
    // let out   = [];
    // for(let i=nums2.length-1; i>=0; i--){
    //     while(stack.length >0 && stack[stack.length-1] <=nums2[i]){
    //         stack.pop();
    //     }
    //     if(stack.length ==0){
    //         m.set(nums2[i],-1);
    //         out.push(-1);
    //     }else {
    //         m.set(nums2[i],stack[stack.length-1]);
    //         out.push(stack[stack.length-1]);
    //     }
    //     stack.push(nums2[i]);
    // }
    
    // return nums1.map(num => m.get(num) || -1);

    let map=new Map();
    let stack=[];

    for(let i=nums2.length;i>=0;i--)
    {
        while(stack.length>0 && stack[stack.length-1]<=nums2[i])
        {
            stack.pop();
        }

        if(stack.length==0)
        {
            map.set(nums2[i],-1);
        }
        else
        {
            map.set(nums2[i],stack[stack.length-1]);
        }
        stack.push(nums2[i]);
    }

    return nums1.map(num=>map.get(num) || -1);
};

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))