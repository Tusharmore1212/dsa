function mergesort(arr,x,start,end)
{
    if(start>end)
    {
        return false
    }
    let mid = Math.floor((start+end)/2);
    if(arr[mid]===x)
    {
        return true;
    }
    if(arr[mid]>x)
    {
        return mergesort(arr,x,start,mid-1)
    }
    else
    {
        return mergesort(arr,x,mid+1,end)
    }
}
let arr=[3,6,2,61,24];
let x=3
if(mergesort(arr,x,0,arr.length-1))
{
    console.log("element found")
}
else
{
    console.log("element found not")

}