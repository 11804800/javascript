// Input: x = 2.00000, n = 10
// Output: 1024.00000


//even odd + -  case n=0 x=0


function Power(x, n) {
  function Pow1(x, n) {
    if (n === 0) {
      return 1;
    }
    if (x === 0) {
      return 0;
    }

    let res=Pow1(x,Math.floor(n/2));  //10 //5 //2  //1  //0   
    res=res*res;                    //2 //1 
    // console.log(res,n);  //4,2   //16 5

    if(n%2==1) //n=1 true n=5 true
    {
        return res*x;   //1*2=2   //16*2=32 
    }

    
    return res;
  }

  let result=Pow1(x,Math.abs(n));
  console.log(result);
}

Power(2.0000000,10);
