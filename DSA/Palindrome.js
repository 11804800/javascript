function PalindromeNum(n)
{
    let num=0;
    let num1=n;

    while(n>0)
    {
        num=(num*10)+(n%10);
        n=Math.floor(n/10);
    }

    console.log(num===num1 ? "Palindrome":"Not Palindrome");

}
PalindromeNum(1221);
PalindromeNum(1212);
PalindromeNum(2331);
PalindromeNum(321345);