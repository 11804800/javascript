function myPow(x, n) {
    function Pow(x, n) {
        if (x === 0) {
            return 0;
        }
        if (n === 0) {
            return 1;
        }

        let res = Pow(x, Math.floor(n / 2));  //5 //2  //1 //0
        res = res * res;    

        if (n % 2 === 1) {   //n=5 1 
            return res * x;
        }

        console.log(res);
        return res;
    }

    let ans = Pow(x, Math.abs(n));  //10

    if (n >= 0) {
        return ans;
    }

    return 1 / ans;
}

console.log(3%2)
console.log(myPow(2.00000,10));
