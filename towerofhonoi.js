function tof(n,source,destination,aux)
{
    if(n==1)
    {
        console.log("move desk 1 from "+source+ "to "+ destination)
        return;
    }
    tof(n-1,source,aux,destination)
    console.log("move disk "+n+" from "+source+" to "+destination)
    tof(n-1,aux,destination,source)
}
tof(3,'a','c','b')