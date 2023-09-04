function lcs(x,y,m,n)
{
    if(m==0||n==0)
    {
        return 0;
    }
    if(x[m-1]==y[n-1])
    {
        return 1 + lcs(x,y,m-1,n-1)
    }
    else
    {
        return Math.max(lcs(x,y,m,n-1), lcs(x,y,m-1,n));
    }
}
var s1= "aggtab"
var s2 ="gxtxayb"
var x= s1;
var y =s2;
var m = x.length;
var n = y.length;
console.log(lcs(x,y,m,n))
