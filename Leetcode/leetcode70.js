var climbStairs = function(n) {
    if(n==1)
    {
        return 1;
    }
    else 
    {
        const arr=new Array(n+1);
        arr[1]=1;
        arr[2]=2;
        for(let i=3;i<=n;i++)
        {
            arr[i]=arr[i-1]+arr[i-2];
        }

        return arr[n];
    }

};

console.log(climbStairs(2));
console.log(climbStairs(4));
console.log(climbStairs(10));